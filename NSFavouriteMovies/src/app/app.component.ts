import { Component } from '@angular/core';
import {Content} from "./models/content";
import {NsfavouriteMoviesService} from "./services/nsfavourite-movies.service";
import {DEFAULTMOVIESCONTENT} from "./data/mock-movies";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NSFavouriteMovies';
  searchMovie: Content[];
  movies: Content = DEFAULTMOVIESCONTENT;

  public id: any;
  constructor(private movieService: NsfavouriteMoviesService) {
    this.searchMovie = [];
  }
  ngOnInit(): void {
    this.movieService.getMyFavMoviesById(1).subscribe(moviesSingleItem => {
      console.log("App component - Got the content item: ", moviesSingleItem);
      this.searchMovie = moviesSingleItem;
    });
  }
  searchMovieById(id: any) {
    console.log({ id, type: typeof id });
    this.movieService
      .getMyFavMoviesById(id)
      .subscribe((movies) => (this.searchMovie = movies));

    console.log({ id, type: typeof id, searchMovie: this.searchMovie });
  }
}


