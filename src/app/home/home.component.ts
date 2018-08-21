import { Component, OnInit, Renderer2, Output, EventEmitter} from "@angular/core";
import { first } from 'rxjs/operators';
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
  @Output() SelectedInterests = new EventEmitter();
  firstName: any;
  currentUser: User;
  user: User[];
  users$: any;
  interests: any;
  
  constructor(
    private userService: UserService, 
    private renderer2: Renderer2) {
  }

  receiveMessage($event: any) {
    let SelectedInterests = $event;
    this.interests = SelectedInterests;
    this.SelectedInterests.emit(this.interests);
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("currentUser"));
    let users$ = this.loadAllUsers();
  }

  private loadAllUsers() {
    this.userService.getAll().pipe(first()).subscribe(users => { 
        this.users$ = users; 
    });
  }
}
