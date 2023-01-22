import { Env } from './../../../env';
import { Form } from './../../models/form';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  model: Form = new Form();
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  newHero() {
    this.model = new Form();
  }

  getEmail() {
    return "El. paštas: " + Env.email;
  }

  getPhone() {
    return "Tel. nr: " + Env.phone;
  }

  getFacebook() {
    return "Facebook: " + Env.facebook;
  }
}
