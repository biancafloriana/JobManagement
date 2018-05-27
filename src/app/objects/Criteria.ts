import { Job } from "./Job";

export interface Criteria {

     meetCriteria(jobs: Array<any>,seachText: any):Array<any>;
 }

 export class NameCriteria implements Criteria {
    meetCriteria(list: any[], seachText: String): any[] {
        console.log(seachText);
        return list.filter((elem) => elem.getName().includes(seachText));
        }
    }
    
export class DomainCriteria implements Criteria {
       meetCriteria(list: any[], seachText: String): any[] {
           console.log(seachText);
           return list.filter((elem) => elem.getDomain().includes(seachText));
           }
     }

export class TypeCriteria implements Criteria {
        meetCriteria(list: any[], seachText: String): any[] {
            console.log(seachText);
            return list.filter((elem) => elem.getType().includes(seachText));
            }
      }

export class CompanyCriteria implements Criteria {
        meetCriteria(list: any[], seachText: String): any[] {
            console.log(seachText);
            return list.filter((elem) => elem.getCompany().includes(seachText));
            }
      }
export class ExperienceCriteria implements Criteria {
        meetCriteria(list: any[], seachText: String): any[] {
            console.log(seachText);
            return list.filter((elem) => elem.getExperience().includes(seachText));
            }
      }

export class InterestCriteria implements Criteria {
    meetCriteria(list: any[], seachText: String): any[] {
    
        return list.filter((elem) => {
                
                    var i = elem.getInterests();

                    for( let e of i){
                            console.log(e.includes(seachText));
                        if( e.includes(seachText)){
                            return true;
                        }
                    }

                return false}


        );
            }
        }
             