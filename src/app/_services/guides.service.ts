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
      { id: 36, name: 'Frank', interests: ["food", "travel"] },
      { id: 54, name: 'Dynama', interests: ["travel"] },
      { id: 93, name: 'Dr IQ', interests: ["travel"] },
      { id: 23, name: 'Magma', interests: ["travel", "tourism"] },
      { id: 10, name: 'Tornado',interests: ["tourism"] }
    ];

    return guides;
    // return this.http.get<GUIDE[]>(this.guidesUrl);
  }
}
