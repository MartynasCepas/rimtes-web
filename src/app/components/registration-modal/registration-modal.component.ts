import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { Form } from './../../models/form';
import { environment } from 'environments/environment';


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

  constructor(private httpClient: HttpClient, private messageService: MessageService,
    private translate: TranslateService ) { }

  onSubmit() {
    this.submitted = true;
    this.sendMail();
  }

  private sendMail() {
    const payload = {
      to: 'rimtek7@gmail.com',
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

    this.httpClient.post(environment.emailApi, payload, httpOptions).subscribe({
        next: () => {
      //    this.closeModal();
        },
        error: () => {
      //    this.closeModal();
        },
    });
    this.closeModal();
  }

  closeModal() {
    this.showSuccess();
    this.hideModal();
  }

  hideModal() {
    this.displayModal = false;
    this.displayModalChange.emit(this.displayModal);
  }

  showSuccess() {
    this.messageService.clear();
    this.messageService.add({severity:'success', summary: this.translate.instant("registration.message"), detail: this.translate.instant("registration.details")});
  }
}
