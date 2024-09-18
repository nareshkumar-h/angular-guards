import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-view.component.html',
  styles: ``
})
export class ProductViewComponent {

  id!: number;

  products = [
    { productId: 101, productName: 'Lenova Laptop' },
    { productId: 102, productName: 'Samsung Laptop' },
    { productId: 103, productName: 'Mac Laptop' }
  ]

  selectedProduct!: any;

  constructor(private route: ActivatedRoute) {
    console.log('ProductViewComponent constructor called');
    this.id = this.route.snapshot.params['id'];
    console.log('Id:', this.id);

    //Filter the product by id
    this.selectedProduct = this.products.find(obj => obj.productId == this.id);
  }
}
