import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Form } from './../../models/form';


@Component({
  selector: 'app-registration-modal',
  templateUrl: './registration-modal.component.html',
  styleUrls: ['./registration-modal.component.scss']
})
export class RegistrationModalComponent {

  model: Form = new Form();
  submitted = false;
  @Input() displayModal = false;
  @Output() displayModalChange = new EventEmitter<boolean>();

  onSubmit() {
    this.submitted = true;
    console.log(this.model);
    this.closeModal()
  }

  closeModal() {
    this.displayModal = false;
    this.displayModalChange.emit(this.displayModal);
  }

}
