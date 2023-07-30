import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navbar: boolean = false;
  menuItems = [
    { name: 'Home', route: '' },
    { name: 'Register', route: 'auth/register' },
    { name: 'Login', route: 'auth/login' },
    { name: 'Cart', route: 'cart' },
  ]

}
