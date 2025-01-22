import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  routes = [
    { path: '/', label: 'Home page: /' },
    { path: 'offers/volvo', label: 'Offer: /offers/volvo' },
    { path: '/volvo', label: 'Offer: /volvo' },
    { path: '/volvo/black', label: 'Offer with attribute: /volvo/black' },
    { path: '/random', label: 'Random page: /random' },
    { path: '/random/hello', label: 'Random page: /random/hello' },
  ];
}
