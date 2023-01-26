import { Env } from './../../../env';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactsComponent {

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
