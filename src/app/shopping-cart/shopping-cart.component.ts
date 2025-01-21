import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartItem } from '../interfaces/cart-item';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css',
})
export class ShoppingCartComponent implements OnInit {
  cartItems: CartItem[] = [];
  total = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getCartItems().subscribe((items) => {
      this.cartItems = items;
      this.total = this.cartService.getTotal();
      // Subscribe to cart changes
      this.cartService.cartUpdated.subscribe(() => {
        this.total = this.cartService.getTotal();
      });
    });
  }

  updateQuantity(id: number, quantity: number) {
    this.cartService.updateQuantity(id, quantity);
  }

  clearCart() {
    this.cartService.clearCart();
  }

  increaseQuantity(item: CartItem) {
    if (item.quantity < item.stock) {
      this.updateQuantity(item.id, item.quantity + 1);
    }
  }

  decreaseQuantity(item: CartItem) {
    if (item.quantity > 1) {
      this.updateQuantity(item.id, item.quantity - 1);
    }
  }

  removeItem(item: CartItem) {
    this.cartService.removeFromCart(item.id);
  }

  getTotal(): number {
    return this.total;
  }

  checkout() {

    console.log('Proceeding to checkout');
   
  }
}
