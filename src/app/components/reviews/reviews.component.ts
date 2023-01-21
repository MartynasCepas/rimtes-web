import { Review } from './../../models/review';
import { Component } from '@angular/core';
import ReviewsJson from '../../../assets/json/reviews.json';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent {
    reviews: Review[] = [];
    responsiveOptions: any[] = [];

    constructor() {
      this.reviews = ReviewsJson.reviews;

      this.responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];
    }
}
