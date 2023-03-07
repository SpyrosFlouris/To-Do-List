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

  ngOnInit(){

  }

  toggleActive(){
    this.isActive =! this.isActive;
  }

  
}
