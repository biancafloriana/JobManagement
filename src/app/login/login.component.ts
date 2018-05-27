import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {UserService} from "../services/userServices"
import { User, UserBuilder } from '../services/UserBuilder';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private userServices: UserService;
    private user: User;
    message$ = "";
    @Output() msgEvent = new EventEmitter();
  constructor(userServices: UserService){
    this.userServices = userServices;
   }

  ngOnInit() {

  
  }

  onLoginSubmit(data): void {

    
    if(data.username =="" || data.password == ""){
          this.message$= "Can't be empty!"
    }else{
      this.message$= "";
   this.userServices.autentification(data).subscribe(r=> {
          if(r==null){ this.message$= "Wrong data!"}
     if(r.obj.password == data.password){
      
      this.user = new UserBuilder().getUser(r.obj,r.type);
      this.msgEvent.emit({user: this.user,type: r.type});
     } else{
      this.message$= "Wrong data!"
     }
    console.log(this.user);
    
    
  })
    }

  }

}
