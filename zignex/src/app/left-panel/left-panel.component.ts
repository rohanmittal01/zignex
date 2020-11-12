import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {

  events: string[] = [];
  opened: boolean = false;;
  hidden = false;
  constructor() { }

  toggleSideNav(){
    this.opened = !this.opened;
  }
  toggleHidden(){
    this.hidden = !this.hidden;
    if(this.opened == true){
      this.opened = false;
    }
  }
  ngOnInit(): void {
  }

}
