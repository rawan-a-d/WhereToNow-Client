import { DataService } from './../data/data.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL = 'https://where-to-now.herokuapp.com/users'
//const URL = 'http://localhost:9090/WhereToNow/users'

@Injectable({
  providedIn: 'root'
})
export class UserService extends DataService {

  constructor(private httpClient: HttpClient) { 
    super(URL, httpClient)
  } 

  public getUserGuardians(id){ //get user's guardians
    return this.httpClient.get(URL + '/' + id + "/guardians/");
  }
}
