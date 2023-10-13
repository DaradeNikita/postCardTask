import { Component, OnInit } from '@angular/core';
import { Ipictures } from '../models/images';
import { images } from '../const/images';

@Component({
  selector: 'app-imageCard',
  templateUrl: './imageCard.component.html',
  styleUrls: ['./imageCard.component.scss']
})
export class ImageCardComponent implements OnInit {
   imageCardsArray :Array<Ipictures> = []
  constructor() { }

  ngOnInit(): void {
   this.imageCardsArray = images;
  }


}
