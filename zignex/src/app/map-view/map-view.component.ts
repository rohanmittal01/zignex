import { trigger, state, style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css'],
  animations: [trigger('customerBtn', [
    state(
      'out',
      style({
        // display: 'none
        bottom: '20px',
        position: 'fixed'
      })
    ),
    state(
      'in',
      style({
        display: 'block',
        // bottom: '40vh',
        bottom: 'calc(30vh + 20px)',
        position: 'fixed'
        // width: '100%'
      })
    ),
  ]),
  trigger('arrowBtn', [
    state(
      'out',
      style({
        // color: 'green',
        height: '20px',
        display: 'none',
        position: 'fixed'
      })
    ),
    state(
      'in',
      style({
        // color: 'red',
        height: '30vh',
        display: 'block',
        bottom: '0',
        width: '100%',
        position: 'fixed'
      })
    )
  ])
  ]
})
export class MapViewComponent implements OnInit {

  arrowBtn = 'out';
  customerBtn = 'out';
  customerBtnClicked = false;
  constructor() { }

  toggleCustomer(): void {
    // this.helpMenuOpen = this.helpMenuOpen === 'out' ? 'in' : 'out';
    // this.mapCanvas = this.mapCanvas === 'out' ? 'in' : 'out';
    this.arrowBtn = this.arrowBtn === 'out' ? 'in' : 'out';
    this.customerBtn = this.customerBtn === 'out' ? 'in' : 'out';
    this.customerBtnClicked = !this.customerBtnClicked;
  }
  ngOnInit(): void {
  }

}
