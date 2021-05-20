import { UserService } from '../services/user/user.service';
import { User } from '../classes/User';
import { Component, ContentChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  loggedInUser: number = 1;

  hide : boolean = true;

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    
    this.userService.get(this.loggedInUser).subscribe((data)=>{
      this.user = <User>data;
     }); 
  }

  myFunction() {
    this.hide = !this.hide;
  }


}
