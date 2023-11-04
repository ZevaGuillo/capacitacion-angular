import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './views/layout/layout.component';
import { SharedRoutingModule } from './shared-routing.module';
import { MaterialModule } from '../material/material.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ModalComponent } from './components/modal/modal.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    LayoutComponent,
    ProductCardComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
