import { Component } from '@angular/core';
import {Content} from "./models/content";
import {NsfavouriteMoviesService} from "./services/nsfavourite-movies.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NSFavouriteMovies';
  searchMovie: Content[];

  public id: any;
  constructor(private movieService: NsfavouriteMoviesService) {
    this.searchMovie = [];
  }
  ngOnInit(): void {}

  searchMovieById(id: any) {
    console.log({ id, type: typeof id });
    this.movieService
      .getMyFavMoviesById(id)
      .subscribe((movies) => (this.searchMovie = movies));

    console.log({ id, type: typeof id, searchMovie: this.searchMovie });
  }
}


