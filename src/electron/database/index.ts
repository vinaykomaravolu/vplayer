import { Collection, Directory, Song } from '../../objects/Object';

const Loki = require('lokijs');

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

      this.addDirectory({
        path: '0',
      });
      this.addDirectory({
        path: '1',
      });
      this.addDirectory({
        path: '2',
      });
      this.addDirectory({
        path: '4',
      });
      this.addDirectory({
        path: '5',
      });

      this.setTheme('theme-chess');
      this.updateCollection(this.MAIN, (collection: Collection) => {
        collection.name = 'TESTING';
        return collection;
      });
      this.addCollection({
        name: 'testplaylust',
        songs: [
          {
            name: Math.random().toString(36).substring(7),
            artists: ['Takafumi Imamura', 'Takafumi Imamura'],
            length: 197,
            publish_year: 1998,
            path: ['A:\\Music\\Pulse'],
            album: Math.random().toString(36).substring(7),
          },
        ],
        type: 'playlist',
      });
      this.addSongToCollection('testplaylust', [
        {
          name: Math.random().toString(36).substring(7),
          artists: ['vinay'],
          length: 197,
          publish_year: 1998,
          path: ['A:\\Music\\Pulse2.0'],
          album: Math.random().toString(36).substring(7),
        },
      ]);
      this.addSongToCollection('testplaylust', [
        {
          name: Math.random().toString(36).substring(7),
          artists: ['vinay4234'],
          length: 197,
          publish_year: 1998,
          path: ['A:\\Music\\Pulse2.0'],
          album: Math.random().toString(36).substring(7),
        },
      ]);
      this.removeSongFromCollection('testplaylust', [
        {
          name: Math.random().toString(36).substring(7),
          artists: ['vinay4234'],
          length: 197,
          publish_year: 1998,
          path: ['A:\\Music\\Pulse2.0'],
          album: Math.random().toString(36).substring(7),
        },
      ]);
    };
    this.db = new Loki('database.db', {
      autoload: true,
      autoloadCallback: databaseInitialize,
      autosave: true,
      autosaveInterval: 5000,
    });
  }

  // implement the autoloadback referenced in loki constructor
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
      return collection.songs.indexOf(item) === index;
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
    return this.collections.find({ name });
  }

  removeCollection(name: string) {
    this.collections.remove({ name });
  }

  removeDirectory(path: string) {
    this.directories.remove({ path });
  }

  // fix this
  removeSongFromCollection(collectionName: string, songs: Song[]) {
    const collection = this.collections.findOne({ name: collectionName });
    for (let i = 0; i < songs.length; i += 1) {
      const song = songs[i];
      const index = collection.songs.indexOf(song);
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
    console.log(collection);
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
