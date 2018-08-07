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
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
    ];
    return guests;
    // return this.http.get<GUEST[]>(this.guestsUrl);

  }
}
