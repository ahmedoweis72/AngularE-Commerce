import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-nav',
  imports: [FontAwesomeModule,RouterLink,RouterLinkActive ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  faCartShopping=faCartShopping;
  itemCount = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    // Initial cart count
    this.cartService.getCartItems().subscribe(() => {
      this.itemCount = this.cartService.getItemCount();
    });

    // Subscribe to cart updates
    this.cartService.cartUpdated.subscribe(() => {
      this.itemCount = this.cartService.getItemCount();
    });
  }
}
