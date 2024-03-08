import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'storybook-angular';
  toppings: any[] = [
    { name: 'Döner', amount: 1, price: 5, total: 5, plu: 100 },
    { name: 'Çeşni', amount: 1, price: 2, total: 2, plu: 100 },
    { name: 'Döner', amount: 1, price: 5, total: 5, plu: 100 },
    { name: 'Çeşni', amount: 1, price: 2, total: 2, plu: 100 },
    { name: 'Döner', amount: 1, price: 5, total: 5, plu: 100 },
    { name: 'Çeşni', amount: 1, price: 2, total: 2, plu: 100 },
    { name: 'Döner', amount: 1, price: 5, total: 5, plu: 100 },
    { name: 'Çeşni', amount: 1, price: 2, total: 2, plu: 100 },
  ];
}
