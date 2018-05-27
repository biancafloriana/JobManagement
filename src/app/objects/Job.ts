import { BasicUser } from "./basicUser";
import { UserService } from "../services/userServices";
import { HttpClient } from "@angular/common/http";

export class Job{

  deleteInterest(arg0: any): any {
   this.interestedUsers= this.interestedUsers.filter( u => u !+ arg0);
  }
  getAgent(): any {
    return this.agent;
  }
  getDomain():any{
    return this.domain;
  }
  getType():any{
    return this.type;
  }
  getCompany():any{
    return this.company
  }
  getExperience(): any {
    return this.experience;
  }
  getApplicants(): any {
    return this.applicants
  }
  addInterest(arg0: any): any {
   this.interestedUsers.push(arg0);
  }
  getInterested(): any {
    return this.interestedUsers;
  }
  getId(): any {
    return this.id;
  }
    private id: any;
    private name: String;
    private type: String;
    private experience: String;
    private domain: String;
    private company: String;
    private applicants: Array<any>=[];
    private interestedUsers: Array<any> = [];
    private agent: any;
  

    constructor(date){
        this.id = date._id;
        this.name = date.name;
        this.type = date.type;
        this.experience = date.experience;
        this.domain = date.domain;
        this. company = date.company;
        this.agent = date.agent;
        this.applicants =date.applicants;
        this.interestedUsers = date.interestedUsers;
        /*for(let user of date.applicants){

        this.applicants.push(user.id);
        }     
        
        for(let user of date.interestedUsers){

        this.interestedUsers.push(user.id);
        }*/
        
    }

    public getName(){
        return this.name
    }

    public AddAplicant(id){

        this.applicants.push(id);
    }

    public  notify(){
        for( let user of this.interestedUsers){
            
          
        }

    }

    isIntrested(id){

      return this.interestedUsers.includes(id);
    }


}