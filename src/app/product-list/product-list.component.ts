import { Component } from '@angular/core';
import * as productData from '../../../products.json';
import { Product } from '../interfaces/product';
import { ProductItemComponent } from '../product-item/product-item.component';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { CartService } from '../services/cart.service';
import { CartItem } from '../interfaces/cart-item';
@Component({
  selector: 'app-product-list',
  imports: [ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {

// addToCart(product:Product) {                                                                                                                                                                                                                                                                                                                                                                             
// if (product.stock !== undefined) {
//   if (product.stock < 10&&product.stock!=1) {
//     product.availabilityStatus='Low Stock'
//   }else{
//     product.availabilityStatus='Out Of Stock'
//   }
//   product.stock=product.stock-1;
// }


// }
  products: Product[] = [];
  product:Product={};
  constructor(private router: Router, private _DataService: DataService,private cartService:CartService) {}
  showDetails(id: number | undefined) {
    this.router.navigate(['/desc'], { queryParams: { id } });
  }
  ngOnInit() {
    this._DataService
      .getProduct()
      .subscribe((res) => (this.products = res.products));
    
  }
  addToCart(product: Product) {
    const cartItem: any = {
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1,
      image: product.images?.[0] ?? '',
      stock: product.stock
    };
    
    this.cartService.addToCart(cartItem);
  }
}
