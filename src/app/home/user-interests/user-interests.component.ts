import { Component, OnInit } from "@angular/core";

import { User } from "../../_models/user";

import { UserService } from "../../_services/user.service";
import { AlertService } from "../../_services";

@Component({
  selector: "app-user-interests",
  templateUrl: "./user-interests.component.html",
  styleUrls: ["./user-interests.component.css"]
})
export class UserInterestsComponent implements OnInit {
  currentUser: User;
  public interests: any;
  users: User[] = [];

  constructor(
    private userService: UserService,
    private alertService: AlertService
  ) {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.currentUser.interests = [""];
  }

  log = "";

  logCheckbox(element: HTMLInputElement): void {
    this.log = "broken";

    let i = 0;
    let interests = this.currentUser.interests;
    for (i; i < interests.length; i++) {
      if (!interests.includes(element)) {
        // add the interest
        interests.push(element);
        this.alertService.success(
          "Added interest " + element + ": " + this.log
        );
        debugger;
      } else {
        let index = this.currentUser.interests.indexOf(element);
        this.currentUser.interests.slice(index);
        this.alertService.error(
          "Removed interest " + element + ": " + this.log
        );
        debugger;
      }
    }
  }
  ngOnInit() {
    this.interests = ["food", "shelter", "tourism", "travel"];
  }
}
