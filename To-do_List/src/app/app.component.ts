import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'To-do_List';
  isActive = false;
  Add = false;
  placeholderText = "Enter text here";
  inputDisabled = true;

  ngOnInit(){

  }

  toggleActive(){
    this.isActive =! this.isActive;
  }

  getUserInput(){
    const userInput = prompt("Please enter your input:");
    if (userInput !== null) {
      this.placeholderText = userInput;
      this.inputDisabled = false;
  }
}}
