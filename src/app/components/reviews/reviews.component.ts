import { Review } from './../../models/review';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent {
    reviews: Review[] = [];
    responsiveOptions: any[] = [];

    constructor() {
      this.reviews = [
        {
          name: "test1",
          content: "very good review",
          date: "1999-13-32"
        },
        {
          name: "test2",
          content: "very good review",
          date: "1999-13-32"
        },
        {
          name: "test3",
          content: "very good review",
          date: "1999-13-32"
        },
        {
          name: "test4",
          content: "very good review",
          date: "1999-13-32"
        }
      ];

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
