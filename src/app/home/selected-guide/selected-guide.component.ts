import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-selected-guide',
  templateUrl: './selected-guide.component.html',
  styleUrls: ['./selected-guide.component.css']
})
export class SelectedGuideComponent implements OnInit {

  @Input() ChildInterests: any
  constructor() { }

  ngOnInit() {
    let ChildInterests = this.ChildInterests;
  }

}
