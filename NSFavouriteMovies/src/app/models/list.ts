import {Content} from "./content";

export class List {
  //A private array of type Content, whos name starts with an underscore character
  private _movies:Content[];
  constructor() {
    this._movies=[]; //A constructor that initially sets the Content array to be empty

  }
  //A getter method that returns your Content array
  get items():Content[]{
    return this._movies;
  }
  //addContent method
  addContent(Content:any){
    this._movies.push(Content);
  }
  //A method that returns the length of the Content array
  listLength():number{
   return this._movies.length;
  }

}
