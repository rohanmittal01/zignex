import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {

  events: string[] = [];
  opened: boolean = false;;

  constructor() { }

  toggleSideNav(){
    this.opened = !this.opened;
  }
  ngOnInit(): void {
  }

}
