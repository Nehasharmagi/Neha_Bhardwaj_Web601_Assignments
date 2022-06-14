import { Component, OnInit } from '@angular/core';
import {Content} from "../models/content";
import {stringify} from "@angular/compiler/src/util";
import {NsfavouriteMoviesService} from "../services/nsfavourite-movies.service";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  title = 'NSFavouriteMovies';
  movies: Content[];
  message?:string;

  constructor(private movieService: NsfavouriteMoviesService)
  {
    this.movies = [];
  }
  ngOnInit(): void {
    this.movieService
      .getMyFavMovies()
      .subscribe((movies) => (this.movies = movies));
  }

  searchAuthorName(authorValue: string): any{
    let authorNameList = this.movies.filter(authorName => authorName.author == authorValue);
    if (authorNameList.toLocaleString().length > 0)
    {
      this.message= 'Author Name found in the Movie list';
      console.log('Author Name exist');
    }
    else {
      this.message = 'Author Name does not exist in the Movie list !';
      console.log('Author Name Does not exist');
    }
  }
}




