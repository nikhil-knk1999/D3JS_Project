const getDb = require('../util/database').getDb;

class Entry {
  constructor() {
    
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection('dummyData')
      .find()
      .toArray()
      .then(entries => {
        console.log("here I am entry.js");
        return entries;
      })
      .catch(err => {
        console.log(err);
      });
  }
}

module.exports = Entry;
