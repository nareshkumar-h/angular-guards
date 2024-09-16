import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductModule } from './product/product.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'amazon-routing-app';
}
