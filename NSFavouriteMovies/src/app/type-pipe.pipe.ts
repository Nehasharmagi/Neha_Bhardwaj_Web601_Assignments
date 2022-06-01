import { Pipe, PipeTransform } from '@angular/core';
import {Content} from "./models/content";

@Pipe({
  name: 'typePipe'
})
export class TypePipePipe implements PipeTransform
{
  transform(movies: Content[], movieType?:string):Content[]
  {
    return movies.filter(movie => movie.type == movieType ? movie.type : null);
  }
}








