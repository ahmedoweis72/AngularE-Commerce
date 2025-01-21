import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { ProductItemComponent } from "./product-item/product-item.component";
import { ProductListComponent } from "./product-list/product-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, ProductItemComponent, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'products-app';
}
