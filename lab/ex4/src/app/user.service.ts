import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  currentUser: String;

  getCurrentUser() {
    return this.currentUser;
  }

  login(username: String, password: String) {
    // TODO: get user from server
    this.currentUser = 'kobe';
  }

  constructor() { }

}
