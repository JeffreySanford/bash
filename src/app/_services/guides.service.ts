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
      { id: 36, name: 'RubberMan' },
      { id: 54, name: 'Dynama' },
      { id: 93, name: 'Dr IQ' },
      { id: 23, name: 'Magma' },
      { id: 10, name: 'Tornado' }
    ];

    return guides;
    // return this.http.get<GUIDE[]>(this.guidesUrl);
  }
}
