import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Renderer2
} from "@angular/core";

import { User } from "../../_models/user";

import { UserService } from "../../_services/user.service";
import { AlertService } from "../../_services/alert.service";
import { SelectedInterestServiceService } from "../../_services/selected-interest.service";

@Component({
  selector: "app-user-interests",
  templateUrl: "./user-interests.component.html",
  styleUrls: ["./user-interests.component.css"]
})
export class UserInterestsComponent implements OnInit {
  currentUser: User = JSON.parse(localStorage.getItem("currentUser"));
  @Output()
  SelectedInterests = new EventEmitter();
  users: User[] = [];
  event: MouseEvent;
  interests: any;

  mouseenter(event: MouseEvent) {
    this.renderer2.addClass(event.target, "mat-elevation-z5");
  }

  mouseleave(event: MouseEvent) {
    this.renderer2.removeClass(event.target, "mat-elevation-z5");
  }

  sendMessage() {
    this.SelectedInterests.emit(this.currentUser.interests);
  }

  constructor(
    private userService: UserService,
    private renderer2: Renderer2,
    private alertService: AlertService,
    private interestsService: SelectedInterestServiceService
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
      this.interestsService.setData(interests);
      debugger
      this.alertService.info(
        "Added interest " + element.value + " and updated the service."
      );
    } else {
      let index = interests.indexOf(element.value);
      interests.splice(index, 1);
      this.interestsService.setData(interests);
      this.alertService.info(
        "Removed interest " + element.value + " and updated the service."
      );
    }
    this.sendMessage();
  }

  ngOnInit() {
    this.interests = ["food", "shelter", "tourism", "travel"];
  }
}
