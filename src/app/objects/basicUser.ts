import { User } from "../services/UserBuilder";

export class BasicUser implements User{

  deleteInterested(arg0: any): any {
    this.interestedJobs = this.interestedJobs.filter( j => j != arg0);
  }
  getInterestedJobs(): any {
    return this.interestedJobs;
  }
  getAppliedJobs(): any {
    return this.appliedJobs
  }
  getNotifications(): any {
   return this.notifications;
  }
  setNotifications(arg0: any): any {
    this.notifications= arg0;
  }
  addInterested(arg0: any): any {
    this.interestedJobs.push(arg0);
  }
    private id : String;
    private username: String;
    private password: String;
    private name: String;
    private interests: Array<String>;
    private interestedJobs: Array<number>;
    private appliedJobs: Array<number>; 
    private contact: String;
    private notifications: Array<any>;

    constructor(data ){
        this.username = data.username;
        this.password = data.password;
        this.id = data._id;
        this.name = data.name;
        this.interests = data.interests;
        this.interestedJobs = data.interestedJobs;
        this.appliedJobs = data.appliedJobs;
        this.contact = data.contact;
        this.notifications= data.notifications;
    };

    setName(myName:String){
        this.name=myName;
    }

    setInterests(myInterests:Array<String>){
        this.interests = myInterests;
    }
    getInterests(myInterests:Array<String>){
       return  this.interests ;
    }

    getId(){

        return this.id;
    }

    addApplications(id: number){

        this.appliedJobs.push(id);
    }

    getName(){
        return this.name;
    }
    getUsername(){
        return this.username;
    }

    update(){
            if(this.notifications!= null){
        for(let n of this.notifications){
            alert(n);
        }}

    }
}