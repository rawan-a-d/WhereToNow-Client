import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { } 

  public getUserById(id){ //get user by id is usefull to git user's profile
    return this.httpClient.get("http://localhost:9090/WhereToNow/users/" + id);
  } 

  public getUser(){ //get all users
    return this.httpClient.get("http://localhost:9090/WhereToNow/users/");
  }
}
