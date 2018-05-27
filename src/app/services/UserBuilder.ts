import { BasicUser } from "../objects/basicUser";
import { Admin } from "../objects/Admin";
import { Agent } from "../objects/Agent";

export interface User{}

export class UserBuilder{

    constructor(){}

    getUser(data,type:String):User{

        switch(type){

            case "basic":
                return new BasicUser(data);
            case "admin":
                return Admin.getInstance(data);
            case "agent":
                return new Agent(data);
        }
        return ;
    }

}