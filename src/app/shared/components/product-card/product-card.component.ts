import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

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

  constructor(public dialog: MatDialog) {}

  openEditDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '600px',
      data: this.product
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }


}
