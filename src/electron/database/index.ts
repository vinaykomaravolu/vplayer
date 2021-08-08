import { Collection, Directory, Song } from '../../objects/Object';

const Loki = require('lokijs');

function indexOfSong(songarray: Song[], song: Song): number {
  for (let i = 0; i < songarray.length; i += 1) {
    if (
      songarray[i].name === song.name &&
      songarray[i].artists.every((val, index) => val === song.artists[index]) &&
      songarray[i].album === song.album &&
      songarray[i].path === song.path &&
      songarray[i].publish_year === song.publish_year &&
      songarray[i].length === song.length
    ) {
      return i;
    }
  }
  return -1;
}

class Database {
  [x: string]: any;

  MAIN = 'main_collection_GB8g^fD6*bnC$8789bf';

  constructor() {
    const databaseInitialize = () => {
      this.directories = this.db.getCollection('directories');
      this.collections = this.db.getCollection('collections');
      this.theme = this.db.getCollection('theme');

      if (this.directories === null) {
        this.directories = this.db.addCollection('directories');
      }
      if (this.collections === null) {
        this.collections = this.db.addCollection('collections');
        const mainCollection: Collection = {
          name: this.MAIN,
          songs: [],
          type: 'collection',
        };
        this.collections.insert(mainCollection);
      }
      if (this.theme === null) {
        this.theme = this.db.addCollection('theme');
        this.theme.insert({ theme: 'theme-amber' });
      }
    };

    this.db = new Loki('database.db', {
      autoload: true,
      autoloadCallback: databaseInitialize,
      autosave: true,
      autosaveInterval: 5000,
    });
  }

  setTheme(theme: string) {
    const currentTheme = this.theme.findOne({});
    currentTheme.theme = theme;
    this.theme.update(currentTheme);
  }

  getTheme() {
    const currentTheme = this.theme.findOne({});
    return currentTheme.theme;
  }

  addSongToCollection(collectionName: string, songs: Song[]) {
    const collection = this.collections.findOne({ name: collectionName });
    collection.songs = collection.songs.concat(songs);
    collection.songs = collection.songs.filter((item: any, index: number) => {
      return indexOfSong(collection.songs, item) === index;
    });
    this.collections.update(collection);
  }

  addCollection(collection: Collection) {
    if (this.collections.findOne({ name: collection.name })) {
      return;
    }
    this.collections.insert(collection);
  }

  addDirectory(directory: Directory) {
    if (this.directories.findOne({ path: directory.path })) {
      return;
    }
    this.directories.insert(directory);
  }

  getDirectories() {
    return this.directories.find({});
  }

  getCollection(name: string) {
    return this.collections.findOne({ name });
  }

  getCollectionNames() {
    return this.collections
      .find({})
      .map((collection: Collection) => collection.name);
  }

  getSongsFromCollection(collectionName: string) {
    const collection = this.collections.findOne({ name: collectionName });
    return collection.songs;
  }

  removeCollection(name: string) {
    this.collections.remove({ name });
  }

  removeDirectory(path: string) {
    this.directories.remove({ path });
  }

  removeSongFromCollection(collectionName: string, songs: Song[]) {
    const collection = this.collections.findOne({ name: collectionName });
    for (let i = 0; i < songs.length; i += 1) {
      const song = songs[i];
      const index = indexOfSong(collection.songs, song);
      if (index > -1) {
        collection.songs.splice(index, 1);
      }
    }
    this.collections.update(collection);
  }

  removeSongFromAllCollections(songs: Song[]) {
    this.collections.update(
      {},
      {
        $pull: {
          songs,
        },
      },
      { multi: true }
    );
  }

  updateCollection(
    name: string,
    updateFunction: (collection: Collection) => void
  ) {
    const collection = this.collections.findOne({ name });
    if (collection !== null) {
      const updatedCollection = updateFunction(collection);
      this.collections.update(updatedCollection);
    }
  }

  save() {
    this.db.saveDatabase();
  }
}

let instance: null | Database = null;

function createInstance() {
  if (!instance) {
    instance = new Database();
  }
}

function getInstance() {
  if (!instance) {
    createInstance();
  }
  return instance;
}

module.exports = { getInstance, Database };
