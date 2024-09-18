import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductViewComponent } from './product/product-view/product-view.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { MyOrdersComponent } from './order/my-orders/my-orders.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { ViewProduct1Component } from './products/view-product-1/view-product-1.component';
import { ViewProduct2Component } from './products/view-product-2/view-product-2.component';
import { ViewProduct3Component } from './products/view-product-3/view-product-3.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, },
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductListComponent },
  // { path: 'viewproduct/p1', component: ViewProduct1Component },
  // { path: 'viewproduct/p2', component: ViewProduct2Component },
  // {path:'viewproduct/p3', component: ViewProduct3Component},
  { path: 'viewproduct/:id', component: ProductViewComponent, },
  { path: 'products/add', component: ProductAddComponent, canActivate: [authGuard] },
  { path: 'myorders', component: MyOrdersComponent, canActivate: [authGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }


];
