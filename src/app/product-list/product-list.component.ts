import { Component } from '@angular/core';
import * as productData from '../../../products.json';
import { Product } from '../interfaces/product';
import { ProductItemComponent } from '../product-item/product-item.component';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-product-list',
  imports: [ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
addToCart(product:Product) { 
if (product.stock !== undefined) {
  if (product.stock < 10&&product.stock!=1) {
    product.availabilityStatus='Low Stock'
  }else{
    product.availabilityStatus='Out Of Stock'
  }
  product.stock=product.stock-1;
}
console.log(product.stock);


}
  products: Product[] = [];
  constructor(private router: Router, private _DataService: DataService) {}
  showDetails(id: number | undefined) {
    this.router.navigate(['/desc'], { queryParams: { id } });
  }
  ngOnInit() {
    this._DataService
      .getProduct()
      .subscribe((res) => (this.products = res.products));
    
  }
}
