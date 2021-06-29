import { Component } from '@angular/core';
import { CardapiService } from '../cardapi.service';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})
/** hand component*/
export class HandComponent {
  myhand = null;
  capi: CardapiService = null;

  /** hand ctor */
  constructor(theCapi: CardapiService) {

    this.capi = theCapi;
  }

  getNewHand() {
    this.capi.getNewHand(hand_result => {
      this.myhand = hand_result;
    });
  }
}
