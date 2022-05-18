import {Content} from "./content";

export class List {
  private _movies:Content[];
  constructor() {
    this._movies=[];

  }
  get items():Content[]{
    return this._movies;
  }

  addContent(Content:any){
    this._movies.push(Content);
  }
  listLength():number{
    return this._movies.length;
  }
  ArrayItem(index:number){
    return this._movies[index];
  }


}
