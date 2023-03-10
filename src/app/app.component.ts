import { Component, OnInit, ElementRef } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Env } from 'src/env';
import { enableProdMode } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService]
})
export class AppComponent implements OnInit {

  title = 'rimtes-web';

  displayRegistrationModal = false;

  constructor(
    private config: PrimeNGConfig,
    private translateService: TranslateService,
    private route: ActivatedRoute,
    private router: Router,
    private element: ElementRef
  ) {
    this.translateService.setDefaultLang('lt');
  }

  ngOnInit() {
    this.router.events.forEach((event) => {
      if(event instanceof NavigationEnd) {
        this.scroll(event.url.replaceAll('-','').replaceAll('/', ''));
      }
    });

    if(Env.production) {
       enableProdMode()
    }
  }

  scroll(id: string) {
    if(id)
      document.querySelector('#'+id)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  onRegistrationModalDisplayChange(event: boolean) {
    this.displayRegistrationModal = event;
  }
}
