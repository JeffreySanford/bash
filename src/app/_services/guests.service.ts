import { Injectable } from "@angular/core";

import { GUEST } from "../_models/guest";

import { HttpClient, HttpHeaders } from "@angular/common/http";

import { INTEREST } from "../_models/interests";
import { SelectedInterestService } from "./selected-interest.service";

import { USER } from "../_models/user";
import { UserService } from "../_services/user.service";

@Injectable()
export class GuestService {
  private guestsUrl = "api/guests";
  private userInterests: INTEREST;
  public guests: GUEST;
  public currentUser: USER;
  public interests: Array<string>;

  constructor(
    private http: HttpClient,
    private selectedInterest: SelectedInterestService,
    private userService: UserService
  ) {
    this.currentUser = this.userService.getUser();
  }

  /** GET guests from the server */
  getGuests() {
    const guests = [
      { id: 11, name: "Mr. Nice", interests: ["travel"] },
      { id: 12, name: "Narco", interests: ["tourism"] },
      { id: 13, name: "Bombasto", interests: ["shelter"] },
      { id: 14, name: "Celeritas", interests: ["food"] },
      {
        id: 15,
        name: "Magneta",
        interests: ["food", "shelter", "tourism", "travel"]
      }
    ];

    // Call subscribe() to start listening for updates.
    let interests = [];
    const userInterests = this.selectedInterest.getInterests();
    console.log(userInterests);

    let selectedGuests = [];

    if (userInterests) {
      for (let i = 0; i < guests.length; i++) {
        let guest = guests[i];

        for (let j = 0; j < userInterests.length; j++) {
          let interest = userInterests[j];
          if (guest.interests.indexOf(interest) != -1) {
            selectedGuests.push(guest);
          }
        }
      }
      if (selectedGuests.length > 0) {
        return selectedGuests;
      } else {
        return guests;
      }
    }
  }
}
