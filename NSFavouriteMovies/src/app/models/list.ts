import {Content} from "./content";

export class List {
  static contentCount = 0;
  _items: Content[];

  constructor(item: Content) {
    this._items = []; // initialize array
    this._items[0] = item; // set the value of the item at the first index of the array
    this.increaseCount();
  }

  get items(): Content[] {
    return this._items;
  }

  increaseCount() {
    return ++List.contentCount;
  }
}
