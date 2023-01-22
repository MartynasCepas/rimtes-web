import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Apie mane',
        routerLink: ['/apie-mane']
      },
      {
        label: 'Kainos',
        routerLink: ['/kainos']
      },
      {
        label: 'Atsiliepimai',
        routerLink: ['/atsiliepimai']
      },
      {
        label: 'Kontaktai',
        routerLink: ['/kontaktai']
      }
    ];
  }
}
