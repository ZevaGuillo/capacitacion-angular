import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'share-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit{

  @Input()
  public product!: Product;

  ngOnInit(): void {
    if (!this.product) {
      throw new Error('ProductCardComponent: product is required');
    }
  }
}
