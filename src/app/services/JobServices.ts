import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {jobs} from './../data/Jobs';
import {Job} from '../objects/Job';
import { BasicUser } from '../objects/basicUser';
import { Observable } from 'rxjs/internal/Observable';



@Injectable()
export class JobServices {
  
  removeInterestedUser(job: any, user: any): any {
    return this.http.delete<boolean>('http://localhost:8000/api/jobs/interested/'+ job + '/' + user,user);
  }
  removeInterestedJob(job: any, user: any): any {
    return this.http.delete<boolean>('http://localhost:8000/api/users/interested/'+ user +'/'+ job, job);
  }
  insertInterest(job: any, user: any): any {
    return this.http.put<boolean>('http://localhost:8000/api/users/interested/'+ user +'/'+ job, job);
  }
  insertInterested(job: any, user: any): any {
    return this.http.put<boolean>('http://localhost:8000/api/jobs/interested/'+ job + '/' + user,user);
  }
  insertApplication(job,user): any {
    return this.http.put<boolean>('http://localhost:8000/api/users/'+ user+'/'+ job, job);
  }
  insertApplicant(job,user): any {
    return this.http.put<boolean>('http://localhost:8000/api/jobs/'+ job + '/' + user,user);
  }
  constructor(private http: HttpClient) {}

  getAllJobs(): Observable<any> {
    return this.http.get('http://localhost:8000/api/jobs');
  }

  getJob(name: string): Observable<Job> {
    var json = this.http.get<JSON>('http://localhost:8000/api/jobs/' + name);
   // var job: Job = JSON.parse(json);
   console.log(json);
    return null;
  }

  insertJob(job: Job): Observable<JSON> {
    return this.http.post<JSON>('http://localhost:8000/api/jobs/', job);
  }

  updateJob(job): any {
    //console.log(job);
    return this.http.put('http://localhost:8000/api/jobs',job);
   
  }

  deleteJob(name) {
    return this.http.delete('http://localhost:8000/api/jobs/' + name);
  }
}