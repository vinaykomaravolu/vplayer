class Database {
  constructor() {
    console.log('Database: constructor');
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
