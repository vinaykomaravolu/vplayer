import {
  Playlist,
  Collection,
  Directory,
  Album,
  Song,
} from '../../objects/Object';

const Loki = require('lokijs');

const MAIN = 'main_collection_GB8g^fD6*bnC$8789bf';

class Database {
  [x: string]: any;

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
          name: MAIN,
          songs: [],
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
      this.updateCollection(MAIN, (collection: Collection) => {
        collection.name = 'TESTING';
        return collection;
      });
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
