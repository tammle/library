import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dashboard-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  // TODO: use @Input?
  user: User = {
    name: '',
    password: ''
  }

  @Output() loginSubmitted = new EventEmitter();

  onSubmit() {
    const user = this.user;

    this.loginSubmitted.emit(user);
  }
}

class User {
  name: string;
  password: string;
}
