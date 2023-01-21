import { Component, OnInit, OnDestroy } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  title = 'rimtes-web';

  constructor(
    private config: PrimeNGConfig,
    private translateService: TranslateService
  ) {
    this.translateService.setDefaultLang('lt');
  }

}
