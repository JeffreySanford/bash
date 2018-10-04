import { Component, OnInit, Renderer2 } from "@angular/core";
import { first } from "rxjs/operators";
import { USER } from "../_models";
import { UserService } from "../_services";

import { INTEREST } from "../_models/interests";
import { SelectedInterestService } from "../_services/selected-interest.service";

import { GuestService } from "../_services/guests.service";
import { GuideService } from "../_services/guides.service";

import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from "@angular/animations";

@Component({
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  animations: [
    trigger("slideInLeft", [
      transition("void => *", [
        style({
          opacity: 0,
          transform: "translate3d(-100%, 0, 0)"
        }),
        animate("1s 200ms ease-in")
      ]),
      transition("* => void", [
        animate(
          "1s 200ms ease-out",
          style({
            opacity: 0,
            transform: "translate3d(0, 0, 0)"
          })
        )
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  firstName: any;
  currentUser: USER;
  user: USER[];
  users$: any;
  interests: Array<string>;
  guests: any;
  guides: any;
  name: string;

  constructor(
    public guestService: GuestService,
    public guideService: GuideService,
    private userService: UserService,
    private interestsService: SelectedInterestService,
    private renderer2: Renderer2
  ) {
    this.currentUser = this.userService.getUser();
    this.interests = this.interestsService.getInterests();
  }

  receiveMessage($event: any) {
    let SelectedInterests = $event;

    // Guests
    let newGuests = [];
    let newGuides = [];

    for (let i = 0; i < SelectedInterests.length; i++) {
      let guests = this.guests;
      let guides = this.guides;

      for (let j = 0; j < guests.length; j++) {

        let guestInterest = this.guests[j].interests;
        if (guestInterest.indexOf(SelectedInterests[i]) > -1) {
          if (newGuests.indexOf(guests[j]) === -1) {
            newGuests.push(guests[j]);
          } 
        }
      }

      for (let k = 0; k < guides.length; k++) {
        let guideInterest = this.guides[k].interests;
        if (guideInterest.indexOf(SelectedInterests[i]) > -1) {
          if (newGuides.indexOf(guests[k]) === -1) {
            newGuides.push(guests[k]);
          }
        }
      }
    }

    //  Check for removing an interest and remove the corresponding Guests and Guides
    if (SelectedInterests.length === 0) {
      this.guests = this.guestService.getGuests();
      this.guides = this.guideService.getGuides();
    }

    if (newGuests.length > 0) {
      this.guests = newGuests;
    }

    if (newGuides.length > 0) {
      this.guides = newGuides;
    }
  }

  private loadAllUsers() {
    this.userService
      .getAll()
      .pipe(first())
      .subscribe(users => {
        this.users$ = users;
      });
  }

  ngOnInit() {
    this.currentUser = this.userService.getUser();
    this.guests = this.guestService.getGuests();
    this.guides = this.guideService.getGuides();
    // let guests = this.guests;
    // let guides = this.guides;
    this.users$ = this.loadAllUsers();
  }
}
