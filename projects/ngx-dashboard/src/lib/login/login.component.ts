import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dashboard-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  @Input() user: any;
  @Output() loginSubmitted = new EventEmitter();

  onSubmit() {
    const user = this.user;
    this.loginSubmitted.emit(user);
  }
}
