import { Component, Input, OnInit } from '@angular/core';
import {Subject}  from 'rxjs';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})

export class PanelComponent implements OnInit {
  @Input() text: string;

  fsSubject = new Subject();
  fsValue = 'fs-12';
  constructor() {
    this.fsSubject.subscribe((value:any) => {
      this.fsValue = ~value.indexOf('fs-') ? value : `fs-${value}`;
    })
  }

  fsChanged(event) {
    this.fsSubject.next((event.target.value || 12));
  }

  ngOnInit(){}


}
