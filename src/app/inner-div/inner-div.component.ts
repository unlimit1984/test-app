import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inner-div',
  templateUrl: './inner-div.component.html',
  styleUrls: ['./inner-div.component.css']
})
export class InnerDivComponent implements OnInit {

  @Input() myInputValue: { name: string };

  constructor() {
  }

  ngOnInit() {
  }

}
