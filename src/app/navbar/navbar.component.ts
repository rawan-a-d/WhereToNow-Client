import { Component, OnInit } from '@angular/core';
import { faPlusCircle, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faPlusCircle = faPlusCircle;
  faUser = faUser;

  constructor() { }

  ngOnInit(): void {
  }

}