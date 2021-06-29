
import { Component } from '@angular/core';
import { CardapiService } from '../cardapi.service';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})

export class DeckComponent {

  message = "";
  capi: CardapiService = null;

  constructor(theCapi: CardapiService) {
    this.capi = theCapi;
  }

  getNewDeck() {
    this.capi.getNewDeck(id_result => {
      //console.log(`Got it! ${id_result}`);
      this.message = `Your deck has id ${id_result}!`;
    });
  }


}
