import { Review } from './../../models/review';
import { AfterContentChecked, AfterViewChecked, Component, OnInit, ViewChild } from '@angular/core';
import ReviewsJson from '../../../assets/json/reviews.json';
import { Carousel } from 'primeng/carousel';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit, AfterViewChecked {
    reviews: Review[] = [];
    responsiveOptions: any[] = [];

    @ViewChild(Carousel) carousel: Carousel;

    constructor(private renderer: Renderer2) {
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

  ngAfterViewChecked(): void {
    if(this.carousel?.el?.nativeElement) {
      const itemsArray = this.carousel.el.nativeElement.querySelectorAll('.p-carousel-item-active');
      if(this.carousel.numVisible === 3) {
        itemsArray.forEach(item => {
          this.renderer.removeClass(item, 'middle-carousel-item');
        })
        let itemId = 1;
        if(this.carousel.page === 2){
          itemId = 4;
        }
        const item = itemsArray[itemId];
        item.classList.add('middle-carousel-item');
      }
      else if (this.carousel.numVisible === 1) {
        itemsArray.forEach(item => {
          if(!item.classList.contains('middle-carousel-item'))
            this.renderer.addClass(item, 'middle-carousel-item');
        })
      }
    }
  }

  ngOnInit(): void {
    console.log(this.carousel)
  }


}
