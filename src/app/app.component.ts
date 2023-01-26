import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
  }

  scroll(id: string) {
    if(id)
      document.querySelector('#'+id)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  onRegistrationModalDisplayChange(event: boolean) {
    this.displayRegistrationModal = event;
  }
}
