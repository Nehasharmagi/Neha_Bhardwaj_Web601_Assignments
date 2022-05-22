import {Component, Input, OnInit} from '@angular/core';
import {Content} from "../models/content";

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  @Input() contentItem?: Content;

  constructor() {

  }

  display_moives() {
    console.log("Moive Id: " + this.contentItem?.id + "\nTitle of Moive: " + this.contentItem?.title );
  }
  ngOnInit(): void {
  }

}
