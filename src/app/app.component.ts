import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = "My First Angular App 😏";



  onSave():void{
    console.log("Button was clicked!");

  }
}
