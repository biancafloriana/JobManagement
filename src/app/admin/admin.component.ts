import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { UserService } from '../services/userServices';
import { BasicUser } from '../objects/basicUser';
import { Agent } from '../objects/Agent';
import { User } from '../services/UserBuilder';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  @ViewChild('newForm') newForm: NgForm;
  @ViewChild('agentForm') agentForm: NgForm;
  private services: UserService;
  private users: Array<BasicUser> = [];
  private agents : Array<Agent>= [];
  @Input() user:User;
  constructor(services: UserService) { 

    this.services=services;
  }

  ngOnInit() {

    console.log(this.user);
    this.services.getAllUsers().subscribe(r=> {
      for(let user of r){ 
      this.users.push(new BasicUser(user));
     // console.log(user);
     }})
     console.log(this.users)
     this.services.getAllAgents().subscribe(r=> {
      for(let user of r){ 
      this.agents.push(new Agent(user));
     // console.log(user);
     }})
     console.log(this.agents)
  
  }


  onSubmit(data){
   
    
    data.interestedJobs = [-1];
    data.appliedJobs = [-1];
    data.interests = data.interests.split(' ');
    data.notifications = [];
    this.newForm.reset();
    console.log(data);
    this.services.insertBasicUser(data).subscribe(r=> this.users.push(new BasicUser(r)));
    console.log(this.users);
  }

  edit(data){
   
    console.log(data);
    this.users=this.users.filter( job =>{
    if(job.getId() == data._id){
      data.interestedJobs = job.getInterestedJobs();
      data.appliedJobs = job.getAppliedJobs();
      data.notifications = job.getNotifications();
      return false;

  }
  return true;
}
);

   
    this.services.updateBasicUser(data).subscribe(r=> {
      

      this.users.push(new BasicUser(data))});
  
  }

  delete(data){


    
    this.services.deleteUser(data).subscribe( r=> {
      if(r>0){
  
        this.users=this.users.filter( job => job.getUsername() != data);
      }
    }) 
  }

  onSubmitAgent(data){
   
    
    data.jobs = [-1];
    
    console.log(data);
    this.services.insertAgent(data).subscribe(r=> this.agents.push(new Agent(r)));
    console.log(this.agents);
    this.agentForm.reset();
    
  }

  editAgent(data){
   
    console.log(data);

    this.agents=this.agents.filter( job => {
      console.log(job.getId());
      if(job.getId() == data._id){
          data.jobs = job.getJobs();
         
          return false;

      }
      return true;}
    
    );
        

    this.services.updateAgent(data).subscribe(r=> {
      

      this.agents.push(new Agent(data))});
  
  }

  deleteAgent(data){

    this.services.deleteAgent(data).subscribe( r=> {
      if(r>0){
          
  
       this.agents= this.agents.filter( job => job.getUsername() != data);
      }
    }) 
    }
  

}
