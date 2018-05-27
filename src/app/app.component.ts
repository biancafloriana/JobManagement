import { Component } from '@angular/core';
import { User } from './services/UserBuilder';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private user : User ;
  title = 'app';
  type$ = true;
  basic$ = false;
  agent$ = false;
  admin$ = false;
  setType(data){
      this.type$ = false;
      this.user = data.user;
      console.log(this.user);
    switch(data.type){

      case "basic":{
          this.basic$ = true;
          break;
        }
      case "admin":{
         this.admin$ = true;
        break;}
      case "agent":{
          this.agent$ = true;
        break;
        }
  }
  }
}
