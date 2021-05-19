import { UserService } from './../services/User/user.service';
import { User } from './../classes/User';
import { Component, ContentChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  user: User;
  loggedInUser: number = 1;

  hide : boolean = true;

  showPassword = false;
  input: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    console.log("User ID: " + this.loggedInUser);
    
    this.userService.getUserById(this.loggedInUser).subscribe((data)=>{
      console.log("User: " + data);
      this.user = <User>data;
      console.log("Logged in User: " + this.user);
     }); 
  }

  toggleShow() {
    this.showPassword = !this.showPassword;
    this.input.type = this.showPassword ? 'text' : 'password';
  }

  myFunction() {
    this.hide = !this.hide;
  }


}
