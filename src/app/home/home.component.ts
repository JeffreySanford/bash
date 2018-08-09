import { Component, OnInit } from "@angular/core";

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
  constructor() {}

  ngOnInit() {}
}
