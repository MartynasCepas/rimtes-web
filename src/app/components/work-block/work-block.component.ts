import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-work-block',
  templateUrl: './work-block.component.html',
  styleUrls: ['./work-block.component.scss']
})
export class WorkBlockComponent {

  @Output() displayModalChange = new EventEmitter<boolean>();

  openModal() {
    this.displayModalChange.emit(true);
  }

}
