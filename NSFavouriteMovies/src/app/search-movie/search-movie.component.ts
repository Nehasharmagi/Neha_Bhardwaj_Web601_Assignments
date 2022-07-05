import { Component, OnInit } from '@angular/core';
import {NsfavouriteMoviesService} from "../services/nsfavourite-movies.service";
import {Content} from "../models/content";

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {

  searchMovie: Content[];

  public id: any;
  public resultFound: boolean = true;
  constructor(private movieService: NsfavouriteMoviesService) {
    this.searchMovie = [];
  }

  ngOnInit(): void {
  }

  searchMovieById(id: any) {
    console.log({ id, type: typeof id });
    this.movieService
      .getMyFavMoviesById(id)
      .subscribe((movies) => (this.searchMovie = movies));

    if (!this.searchMovie) {
      this.resultFound = true;
    } else {
      this.resultFound = false;
    }

    console.log({ id, type: typeof id, searchMovie: this.searchMovie });
  }
}
