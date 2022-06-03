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
  addContent(oneitem: Content): void
  {
    // add content method that adds one item to the end of the array
    this._movies.push(oneitem);
  }
  //A method that returns the length of the Content array
  listLength():number{
   return this._movies.length;
  }
  printProperties(index: number): string {
    if (this._movies.length <= index || index < 0) {
      return `<h2>Error, invalid index requested: ${index}</h2>`;
    }
    return `<div class="content-wrapper">
              <h1>Title of Movie:${this._movies[index].title}</h1><br>
              <p>Description : ${this._movies[index].body}</p>
             <h6> Author name: ${this._movies[index].author}</h6>
              <img src="${this._movies[index].imageLink}" height="100px" width="150px"><br>
            <div>Type: ${this._movies[index].type}</div><br>
            <div>HashTags: ${this._movies[index].hashtags}</div>
            </div>`;
  }
}
