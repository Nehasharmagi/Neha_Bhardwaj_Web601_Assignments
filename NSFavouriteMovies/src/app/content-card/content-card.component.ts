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
    'https://img.jakpost.net/c/2020/01/13/2020_01_13_84657_1578902715._large.jpg';
  titleColor = 'yellow';
  borderHighlight = '3px solid red';

  constructor() {

  }

  display_moives() {
    console.log("Moive Id: " + this.contentItem?.id + "\n Name of Moive: " + this.contentItem?.title );
  }
  ngOnInit(): void {
  }

}
