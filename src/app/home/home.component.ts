import { Component, OnInit } from "@angular/core";
import { first } from "rxjs/operators";

import { User } from "../_models";
import { UserService, AlertService } from "../_services";

import { AppHeaderComponent } from "../app-header/app-header.component";

import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from "@angular/animations";

import { GUEST } from "../_models/guest";
import { GuestService } from "../_services/guests.service";

import { GUIDE } from "../_models/guide";
import { GuideService } from "../_services/guides.service";
import { Observable } from "rxjs";

import { AgmCoreModule } from "@agm/core";

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
  currentUser: User;
  firstName: String;
  users: User[] = [];

  public guests: GUEST[];
  public guides: GUIDE[];
  public links: any;
  public userLinks: any;

  log = "";

  logCheckbox(element: HTMLInputElement): void {
    this.log = `Checkbox ${element.value} was ${
      element.checked ? "" : "un"
    }checked\n`;
    this.alertService.success("Interest " + element.value + ": " + this.log);
  }

  constructor(
    private userService: UserService,
    public guestService: GuestService,
    public guideService: GuideService,
    private alertService: AlertService
  ) {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.firstName = this.currentUser.firstName;
  }

  private loadAllUsers() {
    this.userService
      .getAll()
      .pipe(first())
      .subscribe(users => {
        this.users = users;
      });
  }

  deleteUser(id: number) {
    this.userService
      .delete(id)
      .pipe(first())
      .subscribe(() => {
        this.loadAllUsers();
      });
  }

  ngOnInit() {
    const users = this.loadAllUsers();
    const guests = this.guestService.getGuests();
    const guides = this.guideService.getGuides();

    this.guests = guests;
    this.guides = guides;
    const attractions = {
      tourism: true,
      food: true,
      accomodations: true,
      dynamic: false
    };
  }
}
