import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './views/layout/layout.component';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoginFormComponent,
    LayoutComponent,
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthRoutingModule,
    RouterModule
  ],
  exports: [
    LoginFormComponent
  ]
})
export class AuthModule { }
