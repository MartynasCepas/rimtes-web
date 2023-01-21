import { Component, OnInit, OnDestroy } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  title = 'rimtes-web';

  constructor(
    private config: PrimeNGConfig,
    private translateService: TranslateService,
    private route: ActivatedRoute
  ) {
    this.translateService.setDefaultLang('lt');
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {

    });
  }
}
