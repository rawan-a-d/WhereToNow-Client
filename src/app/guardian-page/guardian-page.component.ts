import { UserDTO } from './../classes/DTO/UserDTO';
import { Component, OnInit } from '@angular/core';
import { User } from '../classes/User';
import { UserService } from '../services/User/user.service';
import { Guardian } from '../classes/Guardian';

@Component({
  selector: 'app-guardian-page',
  templateUrl: './guardian-page.component.html',
  styleUrls: ['./guardian-page.component.css']
})
export class GuardianPageComponent implements OnInit {

  guardians: Guardian[];
  loggedInUser: number = 1; 

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    console.log("User ID Guardian Page: " + this.loggedInUser);
    
    // this.userService.getUserGuardians(this.loggedInUser).subscribe((data)=>{
    //   console.log("User: " + data);
    //   this.guardians = <GuardianDTO[]>data;
    //   console.log("Guardians: " + this.guardians);
    //  }); 

    // this.userService.getUserGuardians(this.loggedInUser)
    // .subscribe(
    //   data => {
    //     this.guardians = <Guardian[]>data;
    //     console.log("Guardians: " + this.guardians);
    //   }
    // )

    this.userService.getUserGuardians(this.loggedInUser)
    .subscribe(
      data => {
        this.guardians = <Guardian[]>data;
        console.log("Guardians: " + this.guardians);
      }
    )

  }



}
