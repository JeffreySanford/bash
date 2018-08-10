import { Injectable } from '@angular/core';

import { Observable } from "rxjs";

import { GUEST } from '../_models/guest';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class GuestService {

  private guestsUrl = 'api/guests';

  constructor(
    private http: HttpClient,
  ) { }

  /** GET guests from the server */
  getGuests() {
    
    const guests = [
      { id: 11, name: 'Mr. Nice', interests:["travel"] },
      { id: 12, name: 'Narco', interests:["tourism"] },
      { id: 13, name: 'Bombasto', interests:["shelter"] },
      { id: 14, name: 'Celeritas', interests:["food"] },
      { id: 15, name: 'Magneta', interests:["food", "shelter", "tourism", "travel"] }
    ];
    return guests;
    // return this.http.get<GUEST[]>(this.guestsUrl);

  }
}
