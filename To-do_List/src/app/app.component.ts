import { CssSelector } from '@angular/compiler';
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

  gradient:string = 'linear-gradient(45deg, black, grey, white)';

  Change1:boolean = false;
  Change2:boolean = false;
  Change3:boolean = false;

  placeholderText1 = "Enter text here";
  placeholderText2 = "Enter text here";
  placeholderText3 = "Enter text here";
  placeholderText4 = "Enter text here";
  placeholderText5 = "Enter text here";
  placeholderText6 = "Enter text here";
  placeholderText7 = "Enter text here";
  placeholderText8 = "Enter text here";
  placeholderText9 = "Enter text here";
  placeholderText10 = "Enter text here";

  ngOnInit(){

  }

  toggleActive(){
    this.isActive =! this.isActive;
  }

  getUserInput(){
    const numberInput = prompt("Please enter the number of the task:");
    const userInput = prompt("Please enter your input:");
    if (userInput !== null && numberInput !== null) {
      if (numberInput == "1") {
        this.placeholderText1 = userInput;
      }
      else if (numberInput == "2") {
        this.placeholderText2 = userInput;
      }
      else if (numberInput == "3") {
        this.placeholderText3 = userInput;
      }
      else if (numberInput == "4") {
        this.placeholderText4 = userInput;
      }
      else if (numberInput == "5") {
        this.placeholderText5 = userInput;
      }
      else if (numberInput == "6") {
        this.placeholderText6 = userInput;
      }
      else if (numberInput == "7") {
        this.placeholderText7 = userInput;
      }
      else if (numberInput == "8") {
        this.placeholderText8 = userInput;
      }
      else if (numberInput == "9") {
        this.placeholderText9 = userInput;
      }
      else if (numberInput == "10") {
        this.placeholderText10 = userInput;
      }
      else {
        alert("Wrong input!")
      }
  }
}
RemoveTask(){
  const numberInput = prompt("Please enter the number of the task:");
  if (numberInput !== null) {
    if (numberInput == "0") {
      this.placeholderText1 = "Enter text here";
      this.placeholderText2 = "Enter text here";
      this.placeholderText3 = "Enter text here";
      this.placeholderText4 = "Enter text here";
      this.placeholderText5 = "Enter text here";
      this.placeholderText6 = "Enter text here";
      this.placeholderText7 = "Enter text here";
      this.placeholderText8 = "Enter text here";
      this.placeholderText9 = "Enter text here";
      this.placeholderText10 = "Enter text here";
    }
    else if (numberInput == "1") {
      this.placeholderText1 = "Enter text here";
    }
    else if (numberInput == "2") {
      this.placeholderText2 = "Enter text here";
    }
    else if (numberInput == "3") {
      this.placeholderText3 = "Enter text here";
    }
    else if (numberInput == "4") {
      this.placeholderText4 = "Enter text here";
    }
    else if (numberInput == "5") {
      this.placeholderText5 = "Enter text here";
    }
    else if (numberInput == "6") {
      this.placeholderText6 = "Enter text here";
    }
    else if (numberInput == "7") {
      this.placeholderText7 = "Enter text here";
    }
    else if (numberInput == "8") {
      this.placeholderText8 = "Enter text here";
    }
    else if (numberInput == "9") {
      this.placeholderText9 = "Enter text here";
    }
    else if (numberInput == "10") {
      this.placeholderText10 = "Enter text here";
    }
    else {
      alert("Wrong input!")
    }
  }
}

CloseWindow(){
  window.close();
}

ToggleOptions(){
  var oldgradient = "linear-gradient(45deg, black, grey, white)";
  var newGradient1 = "linear-gradient(45deg,blue, skyblue)";
  var newGradient2 = "linear-gradient(45deg,rgb(0, 95, 0), rgb(164, 213, 135))";
  var newGradient3 = "linear-gradient(45deg,rgb(118, 3, 248), rgb(187, 76, 235))";

  const option_number = prompt("Give a number between 1 and 3 and give 0 for the default colors :)");

  if(option_number != null){
    if(option_number == "0"){
      this.gradient = oldgradient;
    }
    else if(option_number == "1"){
      this.gradient = newGradient1;
    }
    else if(option_number == "2"){
      this.gradient = newGradient2;
    }
    else if(option_number == "3"){
      this.gradient = newGradient3;
    }
    else {
      alert("wrong input!");
      this.gradient = oldgradient;
    }
  }


}


}



