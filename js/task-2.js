class Storage {
    #items;
  
    constructor(items) {
        this.#items = items;
    }
  
    getItems() {
        return this.#items;
    }
  
    addItem(newItem) {
        this.#items.push(newItem);
    }
  
    removeItem(itemToRemove) {
        const removeItemArray = [];
        if (this.#items.includes(itemToRemove)) {
            this.#items.forEach(element => {
                if (element !== itemToRemove) {
                    removeItemArray.push(element);
                }
            });
        }
        this.#items = removeItemArray;
    }
  }
  
  const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
  console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
  storage.addItem("Droid");
  console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
  storage.removeItem("Prolonger");
  console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
  