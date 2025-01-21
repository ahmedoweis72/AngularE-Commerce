import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../interfaces/product';
import * as productData from '../../../products.json';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-show-description',
  imports: [],
  templateUrl: './show-description.component.html',
  styleUrl: './show-description.component.css',
})
export class ShowDescriptionComponent {
  productId: number = 0;
  prodDes: Product = {};
  products: Product[] = [];
  constructor(
    private route: ActivatedRoute,
    private _DataService: DataService
  ) {}
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.productId = params['id'];
      console.log(this.productId);
    });
    this._DataService
      .getProductDetails(this.productId)
      .subscribe((res) => (this.prodDes = res));
  }
}
