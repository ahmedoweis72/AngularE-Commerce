import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../interfaces/cart-item';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: any[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  cartUpdated = new EventEmitter<void>();

  constructor() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.items = JSON.parse(savedCart);
      this.cartSubject.next(this.items);
    }
  }

  getCartItems() {
    return this.cartSubject.asObservable();
  }

  addToCart(product: Product) {
    console.log('hiiii');

    const item = this.items.find((i) => i.id === product.id);
    if (item) {
      item.quantity++;
    } else {
      this.items.push({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 1,
        image: product.thumbnail,
        stock: product.stock,
      });
    }
    localStorage.setItem('cart', JSON.stringify(this.items));
    this.cartSubject.next(this.items);
    console.log(item);

    // this.updateCart();
  }

  removeFromCart(id: number) {
    this.items = this.items.filter((item) => item.id !== id);
    this.updateCart();
  }

  updateQuantity(id: number, quantity: number) {
    const item = this.items.find((i) => i.id === id);
    if (item) {
      item.quantity = quantity;
      this.updateCart();
    }
  }

  private updateCart() {
    localStorage.setItem('cart', JSON.stringify(this.items));
    this.cartSubject.next(this.items);
    this.cartUpdated.emit();
  }

  getTotal() {
    return this.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }

  getItemCount() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  clearCart() {
    this.items = [];
    this.updateCart();
  }
}
