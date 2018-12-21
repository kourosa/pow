import { decorate, observable, action } from "mobx";

class Item {
  ID = Date.now();
  pID;
  type;
  constructor(pID, type) {
    this.pID = pID;
    this.type = type;
  }
}

decorate(Item, {
  type: observable,
  pID: observable,
  ID: observable
});

class Store {
  Items = [];

  addBox(parentId) {
    const newItem = new Item(parentId, "Box");
    this.Items.push(newItem);
  }

  addContainer(parentId) {
    const newItem = new Item(parentId, "Con");
    this.Items.push(newItem);
  }

  deleteItem(delItemID) {
    this.Items.remove(delItemID);
  }
}

decorate(Store, {
  Items: observable,
  addContainer: action,
  addBox: action,
  filteredItem: action
});

const pro = new Store();

export default pro;
