import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/Auth/login/login.component';
import { SignupComponent } from './Pages/Auth/signup/signup.component';
import { CartManageComponent } from './Pages/Cart/cart-manage/cart-manage.component';
import { HomeManageComponent } from './Pages/Home/home-manage/home-manage.component';
import { ErrorComponent } from './Pages/Layout/error/error.component';

const routes: Routes = [
  { path: '', component: HomeManageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent },
  { path: 'cart', component: CartManageComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
