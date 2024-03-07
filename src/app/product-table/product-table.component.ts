import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss'],
})
export class ProductTableComponent {
  @Input() plu: number = 100;
  @Input() productName: string = 'Lahmacun';
  @Input() amount: number = 1;
  @Input() price: number = 10;
  @Input() total: number = 10;
  @Input() toppings: any[] = [];
  @Input() cancelButtonProperties: any = {
    text: 'Cancel',
    color: 'red',
    fontSize: '16px',
  };

  calculateTotalPrice(): number {
    let totalPrice = this.total;
    for (const topping of this.toppings) {
      totalPrice += topping.total;
    }
    return totalPrice;
  }
}
