// No modification necessary
const items = require("./food_items");

class ConcertTote {
  constructor() {
    this.data = new Map();
    this.set({ key: "foodItems", value: items });
  }

  get({ key }) {
    return this.data.get(key);
  }

  set({ key, value }) {
    return this.data.set(key, value);
  }

  keys() {
    return Array.from(this.data.keys());
  }

  update({ key, by }) {
    this.set({key: key, value: by.call(null, this.get({key: key}))})
  }
}

module.exports = ConcertTote;
