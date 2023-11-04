import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  exports: [
    MatDialogModule,
    MatIconModule
  ],
})
export class MaterialModule { }
