import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CardapiService {
  deck_id: string = '';
  http: HttpClient = null;
  constructor(theHttp: HttpClient) {
    this.http = theHttp;
  }

  getNewDeck(cb) {
    this.http.get<any>('/card/newdeck').subscribe(result => {
      console.log(result);
      this.deck_id = result.deck_id;
      cb(this.deck_id);
    }, error => {
      console.log(error);
    });
  }

  getNewHand(cb) {
    if (!this.deck_id) {
      alert('Please create a deck first!');
      return;
    }

    this.http.get<any>(`/card/gethand/${this.deck_id}`).subscribe(result => {
      console.log(result);
      cb(result.cards);
    }, error => {
      console.log(error);
    });
  }

  testService() {
    alert('Service is working!');
  }
}
