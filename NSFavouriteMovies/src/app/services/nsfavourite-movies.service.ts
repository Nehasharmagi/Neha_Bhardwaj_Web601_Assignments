import { Injectable } from '@angular/core';
import { Content } from '../models/content';
import { Observable, of } from 'rxjs';
import { MOCKMOVIES } from '../data/mock-movies';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NsfavouriteMoviesService {
  constructor(private http: HttpClient, private route: ActivatedRoute) {
    route.params.subscribe((params) => console.log({ params }));
  }

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' }),
  };

  getMyFavMovies(): Observable<Content[]> {
    return this.http.get<Content[]>('api/movies');
  }

  updateMovie(updatedMovie: Content): Observable<any> {
    return this.http.put('api/movies', updatedMovie, this.httpOptions);
  }

  addMovie(updatedMovie: Content): Observable<any> {
    return this.http.post('api/movies', updatedMovie, this.httpOptions);
  }

  getMyFavMoviesById(id: Number): Observable<Content[]> {
    var filterMovies = MOCKMOVIES.filter((movie) => {
      console.log(movie.id, id);
      return movie.id == id;
    });

    if (!filterMovies.length) {
      return of([
        {
          id: -1,
          title: 'Oops!',
          body: '',
          author: '',
          type: '',
          imageLink:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJuoZapV0Lw5vjESzLkeBQL60BPeejjNbywKcoeRbFtzxBTGKaR0apyZH4DRYPuvuwFr0&usqp=CAU',
          hashtags: [''],
        },
      ]);
    }

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

  // updateMovie(movie: Content) {
  //   const updatedData = mockMovies.map((x) =>
  //     x.id === movie.id ? { ...x, ...movie } : x
  //   );

  //   return updatedData;
  // }

  deleteMovie(id: Number): Observable<Content[]> {
    var afterDelete = MOCKMOVIES.filter(function (movie) {
      return movie.id != id;
    });

    return of(afterDelete);
  }
}
