import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  user: User;

  constructor() {
    this.user = new User();
  }


  setUser(user: User) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }
}
