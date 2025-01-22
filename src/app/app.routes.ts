import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OfferComponent } from './offer/offer.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  // {
  //   path: ':slug', // Not working
  //   component: OfferComponent,
  // },
  // {
  //   path: 'offers/:slug', // Working
  //   component: OfferComponent,
  // },
  {
    path: ':slug/:attribute', // Not working
    component: OfferComponent,
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];
