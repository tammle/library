import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  user: User;

  setUser(user: User) {
    this.user = user;
  }

  getUsername() {
    return this.user.name;
  }
}
