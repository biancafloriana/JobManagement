import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../objects/Job';
import { JobServices } from '../services/JobServices';
import { BasicUser } from '../objects/basicUser';
import { UserService } from '../services/userServices';
import { NameCriteria, InterestCriteria } from '../objects/Criteria';
import { Agent } from '../objects/Agent';

@Component({
  selector: 'app-agent-controller',
  templateUrl: './agent-controller.component.html',
  styleUrls: ['./agent-controller.component.css']
})
export class AgentControllerComponent implements OnInit {

 
  notify(users: any): any {
    
    for( let u of users){
       
        if(u!=-1){
          console.log(u);
      this.uServices.notify(u,"Un job de care esti interesat a fost modificat!").subscribe();}

    }
  }
  private jobs: Array<Job> = new Array() ;
  private services: JobServices;
  private users: Array<BasicUser> = [];
  private filteredUser: Array<BasicUser> = [];
  private uServices : UserService;
  message$ = "";
  edit$ = false;
  @Input() user: Agent;
  constructor(myServices: JobServices,userServices: UserService ) {

    this.services=myServices;
    this.uServices = userServices;
      
   }
  ngOnInit() {
    this.services.getAllJobs().subscribe(response =>
      { 
       for(let job of response){ 
         var j =new Job(job);

         if(j.getAgent()== this.user.getId()){
       this.jobs.push(j);}
       console.log(job);
      }
      }
  );
  this.uServices.getAllUsers().subscribe(r=> {
    for(let job of r){ 
      this.users.push(new BasicUser(job));
      console.log(job);}}
  ) 
  this.filteredUser = this.users;
  
  
  }
  edit(data){
    //this.edit$= false;
   
    console.log(data);
    this.jobs=this.jobs.filter( job => {
      if(job.getId() == data._id){

          data.applicants = job.getApplicants();
          data.interestedUsers = job.getInterested();
          data.agent = job.getAgent();
          return false;
      }
    return true;});
    this.services.updateJob(data).subscribe(r=> {
     
      var job = new Job(data);
      this.jobs.push(job);
      this.notify(job.getInterested());
    });
     
  
  }
  addJob(data){
   
   data.agent = this.user.getId();
    data.applicants = [-1];
    data.interestedUsers = [-1];

    console.log(data);
    this.services.insertJob(data).subscribe(r=> {
      var job =new Job(r);
      this.jobs.push(job);
      this.user.addJob(job.getId());

      //this.uServices.updateAgent(this.user).subscribe();
  
    }
  
  );
    console.log(this.jobs);
    
  }

  delete(data){

  this.services.deleteJob(data).subscribe( r=> {
    if(r>0){
        
        console.log(r);
     this.jobs= this.jobs.filter( job => job.getName() != data);
    }
  }) 
  }
  searchUser(data){
  
    if(data ==null){

      this.filteredUser= this.users;

    }else{
    switch(data.type){
       case "name":{
 
         this.filteredUser=new NameCriteria().meetCriteria(this.users,data.SearchText);
         break;
       }
       case "interests":{

        this.filteredUser = new InterestCriteria().meetCriteria(this.users,data.SearchText);
       }

    }
    console.log(this.users);
   }}



}
