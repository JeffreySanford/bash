import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Renderer2
} from "@angular/core";

import { USER } from "../../_models/user";

import { UserService } from "../../_services/user.service";
import { AlertService } from "../../_services/alert.service";

import { INTEREST } from "../../_models/interests";
import { SelectedInterestService } from "../../_services/selected-interest.service";

@Component({
  selector: "app-user-interests",
  templateUrl: "./user-interests.component.html",
  styleUrls: ["./user-interests.component.css"]
})
export class UserInterestsComponent implements OnInit {
  public currentUser: USER;
  @Output()
  SelectedInterests = new EventEmitter();
  users: USER[] = [];
  event: MouseEvent;
  interests: Array<string>;
  interest: string;
  availableInterests: Array<String>;
  selection: string;

  constructor(
    private userService: UserService,
    private renderer2: Renderer2,
    private alertService: AlertService,
    private interestsService: SelectedInterestService
  ) {
    this.currentUser = this.userService.getUser();
    this.availableInterests = ["food", "shelter", "tourism", "travel"];
  }

  mouseEnter(event: MouseEvent) {
    this.renderer2.addClass(event.target, "mat-elevation-z5");
  }

  mouseLeave(event: MouseEvent) {
    this.renderer2.removeClass(event.target, "mat-elevation-z5");
  }

  sendMessage() {
    this.SelectedInterests.emit(this.interests);
  }

  addInterest(selection: string) {
    this.interestsService.setInterest(selection);
    this.interests = this.interestsService.getInterests();
    let alert =
      "Added interest " +
      selection +
      " and updated the service. User interests array is currently: " +
      this.interests;
    this.alertService.info(alert);
  }

  removeInterest(selection: string) {

    this.interestsService.removeInterest(selection);
    this.interests = this.interestsService.getInterests();
    
    let alert =
      "Removed interest " +
      selection +
      " and updated the service. User interests array is currently: " +
      this.interests;
    this.alertService.info(alert);
  }

  interestSelection(element: HTMLInputElement): void {
    
    let selection = element.value;
    let interests = this.interestsService.getInterests();
    let index = interests.indexOf(selection);

    if (index === -1) {
      this.addInterest(selection);
    } else {
      this.removeInterest(selection);
    }
    this.sendMessage();
  }

  ngOnInit() {
    this.currentUser.interests = this.interestsService.getInterests();
    
  }
}
