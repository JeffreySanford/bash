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
  public interests: any = [];
  users: User[] = [];

  constructor(
    private userService: UserService,
    private alertService: AlertService
  ) {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.currentUser.interests = [];
  }

  interestSelection(element: HTMLInputElement): void {
    let interests = this.currentUser.interests;
    let present = interests.includes(element.value);
    if (present === false) {
      // add the interest
      interests.push(element.value);
      this.alertService.success("Added interest " + element.value);
    } else {
      let index = interests.indexOf(element.value);
      interests.splice(interests.indexOf(index, 1));
      this.alertService.error("Removed interest " + element.value);
    }
  }

  ngOnInit() {
    this.interests = ["food", "shelter", "tourism", "travel"];
  }
}
