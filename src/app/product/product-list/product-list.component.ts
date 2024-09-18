import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-list.component.html',
  styles: ``
})
export class ProductListComponent {

  products = [
    { productId: 101, productName: 'Lenova Laptop' },
    { productId: 102, productName: 'Samsung Laptop' },
    { productId: 103, productName: 'Mac Laptop' }
  ]
}
