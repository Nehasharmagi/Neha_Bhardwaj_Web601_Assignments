import {Content} from "./content";

export class List  implements Content{
  //   A private array of type Content
  _movies:Array<Content>;

  id: number=1;
  title: string="";
  body?: string | undefined;
  author: string="";
  type: string="";
  imageUrl?: string | undefined;
  tags?: string[] | undefined;

  constructor() {
    this._movies = []; // initialize array with empty string
  }
// A getter function that returns your Content array
  public get contentArray(){
    return this._movies;
  }

  // An add function that adds 1 Content item to the end of the array
  addContent(id: number, title: string, body: string,  author: string, type:  string, imageUrl?:  string,  tags?: string[]){
    this._movies.push({id: id, title: title, body: body,  author: author, type: type, imageUrl:  imageUrl,  tags: tags});
  }

  // A function that returns the number of items in the array
  public get contentArrayLength(){
    return this.contentArray.length;
  }

  // A function that takes an input of an index of the array and returns a reader-friendly html
  contentArrayItem(index:number){
    return this.contentArray[index];
  }
}
