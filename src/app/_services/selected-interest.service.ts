import { Injectable } from "@angular/core";
import { INTEREST } from "../_models/interests";

import { USER } from "../_models/user";
import { UserService } from "./user.service";

@Injectable({
  providedIn: "root"
})

export class SelectedInterestService {
  public interests: Array<string> = [];
  // public guides: Array<string>;
  // public guests: Array<string>;

  constructor(
    private userService: UserService) {
      this.interests = [];
  }
  
  public selection: string;

  setInterest(selection: string) {
    this.interests.push(selection);
  }

  removeInterest(selection: string) {
    let index = this.interests.indexOf(selection);
    this.interests.splice(index, 1);
  }

  getInterests() {
    return this.interests;
  }

  clearData() {
    this.interests = undefined;
  }
}
