import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  @Output() displayModalChange = new EventEmitter<boolean>();

  openModal() {
    this.displayModalChange.emit(true);
  }
}
