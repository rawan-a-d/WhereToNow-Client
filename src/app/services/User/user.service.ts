import { DataService } from './../data/data.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService extends DataService {

  constructor(private httpClient: HttpClient) { 
    super('http://localhost:9090/WhereToNow/users', httpClient)
  } 

  public getUserGuardians(id){ //get user's guardians
    return this.httpClient.get("http://localhost:9090/WhereToNow/users/" + id + "/guardians/");
  }
}
