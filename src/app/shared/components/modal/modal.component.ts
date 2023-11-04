import { Component } from '@angular/core';
import { ProductRequest } from '../../interfaces/product.interface';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {

  public productForm: FormGroup = this.fb.group({
    productName: [''],
    material: [''],
    precio: [''],
    productImage: [''],
    userImage: [''],
    username: [''],
    createdAt: [''],
  });

  constructor( private fb: FormBuilder ) {}


  logForm() {
    console.log(this.productForm.value.productName);
  }

}
