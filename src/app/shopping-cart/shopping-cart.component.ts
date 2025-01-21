import { Component, OnInit } from '@angular/core';
import { CartItem } from '../interfaces/cart-item';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  imports: [],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent implements OnInit{
  cartItems: CartItem[] = [];
  total = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getCartItems().subscribe((items) => {
      this.cartItems = items;
      console.log(items);
      
      this.total = +this.cartService.getTotal().toFixed(2);
      
    });
  }

  updateQuantity(id: number, quantity: number) {
    this.cartService.updateQuantity(id, quantity);
  }

  removeItem(id: number) {
    this.cartService.removeFromCart(id);
  }

  clearCart() {
    this.cartService.clearCart();
  }

  increment(item: CartItem) {
    if (item.quantity < item.stock) {
      this.updateQuantity(item.id, item.quantity + 1);
    }
  }

  decrement(item: CartItem) {
    if (item.quantity > 1) {
      this.updateQuantity(item.id, item.quantity - 1);
    }
  }
}