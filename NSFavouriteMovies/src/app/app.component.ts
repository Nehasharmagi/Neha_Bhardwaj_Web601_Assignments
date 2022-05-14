import { Component } from '@angular/core';
import {Content} from "./models/content";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NSFavouriteMovies';
  MoviesContentItem: Content;
  constructor() {
    this.MoviesContentItem = {
      id:1,
      title: "Aadhaar",
      body: "This is Drama Movie",
      author: "Suman Ghosh",
      type: "Drama",
      imageUrl: "https://images.unsplash.com/photo-1618281377501-88c2328cbb9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJvYnxlbnwwfHwwfHw%3D&w=1000&q=80",
      tags: ["Colourful","Sociable","LongLivedCreature"]
    }
  }

  }

