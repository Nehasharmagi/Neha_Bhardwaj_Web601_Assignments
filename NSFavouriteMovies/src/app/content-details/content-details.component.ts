import { Component, OnInit } from '@angular/core';
import {Content} from "../models/content";
import {ActivatedRoute} from "@angular/router";
import {NsfavouriteMoviesService} from "../services/nsfavourite-movies.service";

@Component({
  selector: 'app-content-details',
  templateUrl: './content-details.component.html',
  styleUrls: ['./content-details.component.scss']
})
export class ContentDetailsComponent implements OnInit {

  movieId?: number;
  movie?: Content[];
  defaultImageLink: String =
    'https://img.jakpost.net/c/2020/01/13/2020_01_13_84657_1578902715._large.jpg';
  constructor(private route: ActivatedRoute,
              private movieService: NsfavouriteMoviesService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.movieId = Number(params.get('id') ?? 0);
      this.movieService.getMyFavMoviesById(this.movieId).subscribe((c) => {
        this.movie = c;
      });
    });
  }

}
