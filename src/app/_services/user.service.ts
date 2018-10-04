import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { USER } from "../_models/user";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<USER[]>(`${config.apiUrl}/users`);
  }

  getUser() {
    let user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user.interests) {
      user.interests = ['not set'];
      console.log('set user interests to not set.')
    }
    console.log("triggered get user: " + user.firstName + " " + user.lastName);
    return user;
  }
  getById(id: number) {
    return this.http.get(`${config.apiUrl}/users/` + id);
  }

  register(user: USER) {
    return this.http.post(`${config.apiUrl}/users/register`, user);
  }

  update(user: USER) {
    return this.http.put(`${config.apiUrl}/users/` + user.id, user);
  }

  delete(id: number) {
    return this.http.delete(`${config.apiUrl}/users/` + id);
  }
}
