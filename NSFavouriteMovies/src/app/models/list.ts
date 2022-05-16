import {Content} from "./content";

export class List {
  static contentCount = 0;
  _moives: Content[];


  constructor(item: Content) {
    this._moives = []; // initialize array
    this._moives[0] = item; // set the value of the item at the first index of the array
    this.increaseCount();
  }

  get items(): Content[] {
    return this._moives;
  }

  increaseCount() {
    return ++List.contentCount;
  }
}
