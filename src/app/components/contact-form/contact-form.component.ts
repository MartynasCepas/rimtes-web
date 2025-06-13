import { Component } from '@angular/core';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactsComponent {

  getEmail() {
    return environment.email;
  }

  getPhone() {
    return environment.phone;
  }

  getFacebook() {
    return environment.facebook;
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
