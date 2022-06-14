import { Injectable } from '@angular/core';
import {MOCKMOVIES} from "../data/mock-movies";
import {Observable, of} from "rxjs";
import {Content} from "../models/content";

@Injectable({
  providedIn: 'root'
})
export class NsfavouriteMoviesService {

  constructor() {

  }
  getMyFavMovies(): Observable<Content[]> {
    return of(MOCKMOVIES);
  }

  getMyFavMoviesById(id: Number): Observable<Content[]> {
    var filterMovies = MOCKMOVIES.filter((movie) => {
      console.log(movie.id, id);
      return movie.id == id;
    });
    console.log({ filterMovies });
    return of(filterMovies);
  }

  insertNewMovie(newMovie: Content): Observable<Content[]> {
    var filterMovies = MOCKMOVIES.filter((movie) => {
      return movie.id == newMovie.id;
    });

    if (filterMovies.length == 0) {
      MOCKMOVIES.push(newMovie);
    }

    return of(MOCKMOVIES);
  }

  updateMovie(movie: Content) {
    const updatedData = MOCKMOVIES.map((x) =>
      x.id === movie.id ? { ...x, ...movie } : x
    );

    return updatedData;
  }

  deleteMovie(id: Number): Observable<Content[]> {
    var afterDelete = MOCKMOVIES.filter(function (movie) {
      return movie.id != id;
    });

    return of(afterDelete);
  }
}
