import {
  Component,
  OnInit,
  Input
} from "@angular/core";

import { GUEST } from "../../_models/guest";
import { GuestService } from "../../_services/guests.service";

import { GUIDE } from "../../_models/guide";
import { GuideService } from "../../_services/guides.service";

import { USER } from "../../_models/user";
import { UserService } from "../../_services";

import { SelectedInterestService } from "../../_services/selected-interest.service"

@Component({
  selector: "app-related-users",
  templateUrl: "./related-users.component.html",
  styleUrls: ["./related-users.component.css"]
})

export class RelatedUsersComponent implements OnInit {
  public _interests: any;

  @Input()
  set NewSelectedInterests(NewSelectedInterests: any) {
    this._interests = NewSelectedInterests;
  }

  public guests: GUEST[]
  public guides: GUIDE[];
  public currentUser: USER;
  public interest: string;

  constructor(
    public userService: UserService,
    public guestService: GuestService,
    public guideService: GuideService,
    public interestService: SelectedInterestService
  ) {
    this.currentUser = this.userService.getUser();
    this.guests = this.guestService.getGuests();
    this.guides = this.guideService.getGuides();
    // this.interests = this.interestService.getInterests();
    
  }

  receiveMessage($event: any) {
    let NewSelectedInterests = $event;
    this._interests = NewSelectedInterests;
  }

  ngOnInit() {
  }
}
