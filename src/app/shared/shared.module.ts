import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './views/layout/layout.component';
import { SharedRoutingModule } from './shared-routing.module';



@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
