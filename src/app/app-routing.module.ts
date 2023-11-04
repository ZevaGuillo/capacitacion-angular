import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './auth/components/login-form/login-form.component';
import { HomeComponent } from './shared/pages/home/home.component';
import { LayoutComponent } from './shared/views/layout/layout.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginFormComponent
  },
  {
    path: "",
    loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
