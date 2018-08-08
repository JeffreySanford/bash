import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { AlertService } from '../_services/alert.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})

export class AppHeaderComponent implements OnInit {
  public currentUser: User;
  public firstName: String;
  userLinks: any;
  links: any;
  
  constructor(    
    public userService: UserService,
    public alertService: AlertService
  ) {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.firstName = this.currentUser.firstName;
  }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.firstName = this.currentUser.firstName;
    let firstName = this.currentUser.firstName;

    let userLinks = ["/login", "/register", "/account", "/settings"];
    let links = ["/landing", "/guest", "/host", "/vendor"];
    this.userLinks = userLinks;
    this.links = links;
  }

}
