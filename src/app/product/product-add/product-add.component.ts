import { Component } from '@angular/core';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [],
  templateUrl: './product-add.component.html',
  styles: ``
})
export class ProductAddComponent {

  constructor() {
    console.log('Product - add component ');
    // let user = localStorage.getItem("IS_LOGGED_IN");
    // console.log('isLoggedIn:', user);
    // if (!user) {
    //   alert("Please login to access this page");
    // }
  }
}
