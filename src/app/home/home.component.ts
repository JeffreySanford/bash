import { Component, OnInit, Renderer2, Output, EventEmitter} from "@angular/core";
import { User } from '../_models';
import { UserService } from '../_services'

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
  currentUser: User;
  user: User;
  any: any;
  interests: any;
  
  constructor(
    private userService: UserService, 
    private renderer2: Renderer2) {
  }

  receiveMessage($event: any) {
    let SelectedInterests = $event;
    this.interests = SelectedInterests;
    
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("currentUser"));
    let user = this.user;
  }
}
