import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductViewComponent } from './product/product-view/product-view.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { MyOrdersComponent } from './order/my-orders/my-orders.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, },
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/id', component: ProductViewComponent, },
  { path: 'products/add', component: ProductAddComponent, canActivate: [authGuard] },
  { path: 'myorders', component: MyOrdersComponent, canActivate: [authGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }


];
