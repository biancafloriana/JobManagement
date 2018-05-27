import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { UserBuilder, User } from './UserBuilder';



@Injectable()
export class UserService {
    

  deleteAgent(arg0: any): any {
    return this.http.delete('http://localhost:8000/api/agents/'+ arg0);
  }
  notify(arg0: any, arg1: any): any {
    console.log(arg0);
    console.log(arg1);
    return this.http.post('http://localhost:8000/api/notify/' +arg0, {message:arg1});
  }
  updateAgent(arg0: any): any {
    return this.http.put('http://localhost:8000/api/agents',arg0);
  }
  insertAgent(arg0: any): any {
    return this.http.post('http://localhost:8000/api/agents',arg0);
  }
  getAllAgents(): any {
    return this.http.get('http://localhost:8000/api/agents');
  }
  deleteUser(arg0: any): any {
    return this.http.delete('http://localhost:8000/api/users/'+ arg0);
  }
  updateBasicUser(arg0: any): any {
    return this.http.put('http://localhost:8000/api/users',arg0);
  }
  insertBasicUser(arg0: any): any {
    return this.http.post('http://localhost:8000/api/users',arg0);
  }
  autentification(data): any{
     return this.http.get('http://localhost:8000/api/users/'+ data.username);
  }

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any> {
    return this.http.get('http://localhost:8000/api/users');
  }

  
}