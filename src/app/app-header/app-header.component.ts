import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { AlertService } from '../_services/alert.service';
import { USER } from '../_models/user';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})

export class AppHeaderComponent implements OnInit {
  public currentUser: USER;
  public firstName: String;
  userLinks: any;
  links: any;
  
  constructor(    
    public userService: UserService,
    public alertService: AlertService
  ) {
    this.currentUser = this.userService.getUser();
    this.firstName = this.currentUser.firstName;
  }

  ngOnInit() {

    let firstName = this.currentUser.firstName;

    let userLinks = ["/login", "/register", "/account", "/settings"];
    let links = ["/landing", "/guest", "/host", "/vendor"];
    this.userLinks = userLinks;
    this.links = links;
  }

}
