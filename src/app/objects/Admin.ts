import { User } from "../services/UserBuilder";

export class Admin implements User{

        private static instance: Admin;
        private id : String;
        private username: String;
        private password: String;
       
       private  constructor(data ){
            this.username = data.username;
            this.password = data.password;
            this.id = data._id;
            
        };
           
        getId(){
    
            return this.id;
        }

        static getInstance(data) {
            if (!Admin.instance) {
                Admin.instance = new Admin(data);
                // ... any one time initialization goes here ...
            }
            return Admin.instance;
        }
    
    }


