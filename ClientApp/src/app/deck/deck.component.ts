import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
/** deck component*/
export class DeckComponent {
/** deck ctor */
  message = "";
  http: HttpClient = null;

  constructor(theHttp: HttpClient) {
    this.http = theHttp;
  }

  getNewDeck() {
    this.http.get<any>('/card/newdeck').subscribe(result => {
      console.log(result);
      window["deck_id"] = result.deck_id;
      this.message = `You have a new deck! The ID is ${result.deck_id}`;
    }, error => {
      console.log(error);
    });

  }


}
