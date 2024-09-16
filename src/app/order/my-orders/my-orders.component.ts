import { Component } from '@angular/core';

@Component({
  selector: 'app-my-orders',
  standalone: true,
  imports: [],
  templateUrl: './my-orders.component.html',
  styles: ``
})
export class MyOrdersComponent {

  constructor() {
    console.log('MyOrdersComponent');
    // let user = localStorage.getItem("IS_LOGGED_IN");
    // console.log('User:', user);
    // if (!user) {
    //   alert("Please login to access this page");
    //   window.location.href = "/login"
    // }
  }
}
