import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './views/layout/layout.component';
import { SharedRoutingModule } from './shared-routing.module';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
