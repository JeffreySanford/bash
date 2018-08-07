import { Injectable } from '@angular/core';

import { Observable } from "rxjs";

import { GUIDE } from '../_models/guide';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class GuideService {

  private guidesUrl = 'api/guides';

  constructor(
    private http: HttpClient,
  ) { }

  /** GET heroes from the server */
  getGuides() {
    const guides = [
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];

    return guides;
    // return this.http.get<GUIDE[]>(this.guidesUrl);
  }
}
