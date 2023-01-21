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
        label: 'About',
      },
      {
        label: 'Tutoring',
      },
      {
        label: 'Online Sessions',
      },
      {
        label: 'FAQ',
      },
      {
        label: 'Work Sheets',
      },
      {
        label: 'Contact',
      },
    ];
  }
}
