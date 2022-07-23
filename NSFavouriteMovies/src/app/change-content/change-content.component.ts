import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Content } from '../models/content';
import { NsfavouriteMoviesService } from '../services/nsfavourite-movies.service';

@Component({
  selector: 'app-change-content',
  templateUrl: './change-content.component.html',
  styleUrls: ['./change-content.component.scss'],
})
export class ChangeContentComponent implements OnInit {
  constructor(
    private moviesService: NsfavouriteMoviesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  isNaN = Number.isNaN;

  public movie: Content = {
    id: undefined,
    title: '',
    body: '',
    author: '',
    type: '',
  };

  addMovieToServer(): void {
    this.moviesService
      .insertNewMovie(this.movie)
      .subscribe((newContentFromServer) => {
        console.log('New Movie added successfully!', newContentFromServer);
        this.movie = {
          id: undefined,
          title: '',
          body: '',
          author: '',
          type: '',
        };
      });

  }

  updateMovieOnServer(): void {
    this.moviesService
      .updateMovie(this.movie)
      .subscribe(() => console.log('Movie updated successfully', this.movie));
  }

  ngOnInit(): void {
    var movieId = this.route.snapshot.paramMap.get('id');

    if (movieId) {
      var movie = this.moviesService
        .getMyFavMoviesById(Number(movieId))
        .subscribe((movies) => {
          console.log({ movies });
          if (movies.length) {
            if (movies[0].id == -1) {
              console.log(`Sorry No Movie Found on ID: ${movieId}`);
              this.router.navigate(['/addContent', {}]);
            }

            this.movie = { ...this.movie, ...movies[0] };

            console.log(this.movie);
          }
        });
    }
  }
}
