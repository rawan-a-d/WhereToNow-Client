import { UserDTO } from '../classes/DTO/UserDTO';
import { Component, OnInit } from '@angular/core';
import { User } from '../classes/User';
import { UserService } from '../services/user/user.service';
import { Guardian } from '../classes/Guardian';

@Component({
  selector: 'app-guardian',
  templateUrl: './guardian.component.html',
  styleUrls: ['./guardian.component.css']
})
export class GuardianComponent implements OnInit {

  guardians: Guardian[];
  loggedInUser: number = 1; 

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.userService.getUserGuardians(this.loggedInUser)
    .subscribe(
      data => {
        this.guardians = <Guardian[]>data;
      }
    )

  }



}
