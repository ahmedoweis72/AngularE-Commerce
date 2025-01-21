import { Component, Input } from '@angular/core';
import { Product } from '../interfaces/product';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  imports: [RatingModule, FormsModule,CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent {
  @Input() product: Product | undefined;

  constructor() {}
}
