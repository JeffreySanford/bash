import { Component, OnInit } from '@angular/core';

import { GUEST } from "../../_models/guest";
import { GuestService } from "../../_services/guests.service";

import { GUIDE } from "../../_models/guide";
import { GuideService } from "../../_services/guides.service";

import { User } from "../../_models/user";
import { UserService } from '../../_services';


@Component({
  selector: 'app-related-users',
  templateUrl: './related-users.component.html',
  styleUrls: ['./related-users.component.css']
})
export class RelatedUsersComponent implements OnInit {
  public guests: GUEST[];
  public guides: GUIDE[];
  public currentUser: User;

  constructor(
    public userService: UserService,
    public guestService: GuestService,
    public guideService: GuideService
  ) { 
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
  }

  ngOnInit() {
    const guests = this.guestService.getGuests();
    const guides = this.guideService.getGuides();

    this.guests = guests;
    this.guides = guides;
  }
}
