import { Review } from './../../models/review';
import { Component, OnInit, ViewChild } from '@angular/core';
import ReviewsJson from '../../../assets/json/reviews.json';
import { Carousel } from 'primeng/carousel';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
    reviews: Review[] = [];
    responsiveOptions: any[] = [];

    @ViewChild('carousel') carousel: Carousel;

    constructor() {
      this.reviews = ReviewsJson.reviews;

      this.responsiveOptions = [
        {
            breakpoint: '1100px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '650px',
            numVisible: 1,
            numScroll: 1
        }
    ];
    }

  ngOnInit(): void {
    console.log(this.carousel)
  }

}
