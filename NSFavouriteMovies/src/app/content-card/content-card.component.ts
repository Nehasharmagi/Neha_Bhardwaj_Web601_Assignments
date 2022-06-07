import {Component, Input, OnInit} from '@angular/core';
import {Content} from "../models/content";

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  @Input() contentItem?: Content;
  defaultImageLink: String =
    'https://media.istockphoto.com/vectors/movie-time-vector-illustration-cinema-poster-concept-on-red-round-vector-id911590226?k=20&m=911590226&s=612x612&w=0&h=HlJtSKF-fLsKFy1QJ-EVnxXkktBKNS-3jUQPXsSasYs=';
  titleColor = '#10F1E0';
  borderHighlight = '3px solid red';
  hoverTextColor = 'blue';
  constructor() {
  }

  display_moives() {
    console.log("Moive Id: " + this.contentItem?.id + "\n Name of Moive: " + this.contentItem?.title );
  }
  ngOnInit(): void {
  }

}
