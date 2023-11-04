import { Component } from '@angular/core';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  urlImage: string = "https://avatars.githubusercontent.com/u/60801438?v=4";

  navBarItems = [
    {
      title: 'Home',
      icon: "home",
      url: '/'
    },
    {
      title: 'About',
      icon: "bookmark_outline",
      url: '/about'
    },
    {
      title: 'Contact',
      icon: "help_outline",
      url: '/contact'
    },
    {
      title: 'Login',
      icon: "work",
      url: '/login'
    },
    {
      title: 'Register',
      icon: "apps",
      url: '/register'
    }
  ]

}
