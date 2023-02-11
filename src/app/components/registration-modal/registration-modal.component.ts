import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Env } from 'src/env';
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

  constructor(private httpClient: HttpClient) { }

  onSubmit() {
    this.submitted = true;
    console.log(this.model);
    this.sendMail();
  }

  private sendMail() {
    const payload = {
      to: 'martynas061@gmail.com',
      subject: 'Form submission',
      html: `
        <p>First Name: ${this.model.firstName}</p>
        <p>Last Name: ${this.model.lastName}</p>
        <p>Email: ${this.model.email}</p>
        <p>Phone: ${this.model.phone}</p>
        <p>Social: ${this.model.social}</p>
        <p>Message: ${this.model.message}</p>
      `
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.httpClient.post(Env.emailApi, payload, httpOptions).subscribe( (res) => {
      this.closeModal()
    });
  }

  closeModal() {
    this.displayModal = false;
    this.displayModalChange.emit(this.displayModal);
  }

}
