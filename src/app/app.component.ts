import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from "./navbar/navbar.component";
import { HeaderComponent } from "./header/header.component";
import {  FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppNavbar, HeaderComponent , FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Angular-FirstProject';
  imageURL: string = 'https://www.html.it/app/uploads/2024/05/angular.png'
  isDisabled: boolean = true;
  isActive: boolean = true;
  userName: string = 'John Doe'

  clickButton() {
    console.log('Button clicked')
    this.isActive = false
  };

  keyEnter(event:any) {
    if (event.keyCode == 13){
      console.log('Enter key pressed')
      this.isActive = true
    }
  };

  keyFiltering(user:HTMLInputElement){
    console.log(user.value)
  }

  changeUsername(username:HTMLInputElement){
    this.userName = username.value
    console.log(username.value)
  }

}
