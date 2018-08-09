import { Component, OnInit } from '@angular/core';

import { GUEST } from "../../_models/guest";
import { GuestService } from "../../_services/guests.service";

import { GUIDE } from "../../_models/guide";
import { GuideService } from "../../_services/guides.service";

@Component({
  selector: 'app-related-users',
  templateUrl: './related-users.component.html',
  styleUrls: ['./related-users.component.css']
})
export class RelatedUsersComponent implements OnInit {
  public guests: GUEST[];
  public guides: GUIDE[];

  constructor(
    public guestService: GuestService,
    public guideService: GuideService
  ) { }

  ngOnInit() {
    const guests = this.guestService.getGuests();
    const guides = this.guideService.getGuides();

    this.guests = guests;
    this.guides = guides; 
  }

}
