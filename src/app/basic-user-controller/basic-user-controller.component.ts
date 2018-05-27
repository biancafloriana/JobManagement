import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import {BasicUser} from '../objects/basicUser';
import {Job} from '../objects/Job';
import {JobServices} from '../services/JobServices';
import { UserController } from "../user-controller";
import {CatService} from ".././services/cat.services"
import { Observable } from 'rxjs';
import { NameCriteria, TypeCriteria, DomainCriteria, CompanyCriteria, ExperienceCriteria } from '../objects/Criteria';
import { ArrayType } from '@angular/compiler/src/output/output_ast';
import { Criteria } from '../objects/Criteria';
import { SearchControllerComponent } from '../search-controller/search-controller.component';
import { UserService } from '../services/userServices';
@Component({
  selector: 'app-basic-user-controller',
  templateUrl: './basic-user-controller.component.html',
  styleUrls: ['./basic-user-controller.component.css']
})
export class BasicUserControllerComponent implements OnInit,UserController,AfterViewInit {

  show$: boolean;
  ngAfterViewInit(): void {
    
    

    }  
    deleteNotifications(): any {

    var x = this.user;
    x.setNotifications([]);
    this.userSer.updateBasicUser(x).subscribe();
  }
  //private user: BasicUser= new BasicUser(2);
  private jobs: Array<Job> = new Array() ;
  private services: JobServices;
  private filterdJobs: Array<Job>;
  private userSer : UserService;
  private j: Array<any>;
  private interestedJ: Array <Job>= [];
  @Input() user: BasicUser;
  constructor(myServices: JobServices, userServices: UserService ) {

    this.services=myServices;
    this.userSer = userServices;
   // userServices.getAllUsers().subscribe(r => console.log(r));
      
   }

  ngOnInit() {
      this.services.getAllJobs().subscribe(response =>
           { 
            for(let job of response){ 
            this.jobs.push(new Job(job));
            console.log(job.applicants);
           }
           }
      );
      this.filterdJobs = this.jobs;  
      console.log(this.jobs); 
      this.user.update();
      this.deleteNotifications();
    
  }

  searchJob(data){
  
    if(data== null){
      this.filterdJobs = this.jobs;
    }else{
   switch(data.type){
      case "name":{

        this.filterdJobs=new NameCriteria().meetCriteria(this.jobs,data.SearchText);
        break;
      }
      case "type":{

        this.filterdJobs=new TypeCriteria().meetCriteria(this.jobs,data.SearchText);
        break;
      }
      case "domain":{

        this.filterdJobs=new DomainCriteria().meetCriteria(this.jobs,data.SearchText);
        break;
      }
      case "company":{

        this.filterdJobs=new CompanyCriteria().meetCriteria(this.jobs,data.SearchText);
        break;
      }
      case "experience":{

        this.filterdJobs=new ExperienceCriteria().meetCriteria(this.jobs,data.SearchText);
        break;
      }



   }
   console.log(this.filterdJobs);
  }}

  applyToJob(job){
     console.log(job);
     console.log(this.user.getId());
    var id = this.user.getId();
    this.services.insertApplicant(job,id).subscribe(r=>{
      if(r){
                this.services.insertApplication(job,id).subscribe(r1=> {
                  if(r1){
                            this.user.addApplications(job);
                           var j= this.jobs.find( jb => jb.getId()== job);
                           j.AddAplicant(id);
              }}); }
          });
         // this.updateInterested()
  }

  intrestedIn(job){
    var id = this.user.getId();
    this.services.insertInterested(job,id).subscribe(r=>{
      if(r){
                this.services.insertInterest(job,id).subscribe(r1=> {
                  if(r1){
                            this.user.addInterested(job);
                           var j= this.jobs.find( jb => jb.getId()== job);
                           j.addInterest(id);
              }}); }
          });

         // this.updateInterested()

  }

  updateInterested(){
    this.show$ = true;
   this.interestedJ = this.jobs.filter(j => j.isIntrested(this.user.getId()));
   console.log(" intrested =",this.interestedJ);
    }

  

  uninterested(job){

    var id = this.user.getId();
    this.services.removeInterestedUser(job,id).subscribe(r=>{
      if(r){
                this.services.removeInterestedJob(job,id).subscribe(r1=> {
                  if(r1){
                            this.user.deleteInterested(job);
                           var j= this.jobs.find( jb => jb.getId()== job);
                           j.deleteInterest(id);
                          this.interestedJ= this.interestedJ.filter( j => j != job);
              }}); }
          });

                 
  }

}