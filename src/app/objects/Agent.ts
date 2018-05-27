import { User } from "../services/UserBuilder";

export class Agent implements User{

  addJob(arg0: any): any {
    this.jobs.push(arg0);
  }
  getJobs(): any {
    return this.jobs;
  }
  getUsername(): any {
    return this.username;
  }
    private id : String;
    private username: String;
    private password: String;
    private jobs: Array<number>; 


    constructor(data ){
        this.username = data.username;
        this.password = data.password;
        this.id = data._id;
        this.jobs = data.jobs;
        
        
    };

   
    getId(){

        return this.id;
    }

}