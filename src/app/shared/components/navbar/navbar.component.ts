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
      icon: "😏",
      url: '/'
    },
    {
      title: 'About',
      icon: "😋",
      url: '/about'
    },
    {
      title: 'Contact',
      icon: "😎",
      url: '/contact'
    },
    {
      title: 'Login',
      icon: "🥰",
      url: '/login'
    },
    {
      title: 'Register',
      icon: "😪",
      url: '/register'
    }
  ]

}
