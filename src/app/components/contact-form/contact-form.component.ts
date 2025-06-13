import { Env } from '../../../../environments/env';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactsComponent {

  getEmail() {
    return Env.email;
  }

  getPhone() {
    return Env.phone;
  }

  getFacebook() {
    return Env.facebook;
  }

  goToEmail() {
    window.open(`mailto:${this.getEmail()}`);
  }

  callPhoneNumber() {
    window.location.href = 'tel:' + this.getPhone();
  }

  openFacebook() {
    window.open(this.getFacebook());
  }
}
