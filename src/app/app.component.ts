import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: [string | number, boolean] = [5, true];

  constructor() {
    this.title = [42, false];
  }
}
