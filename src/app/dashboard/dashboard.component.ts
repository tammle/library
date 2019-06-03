import { Component } from '@angular/core';
import { SessionService } from "../services/session.service";

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  host: { 'class': 'vh-100' }
})
export class DashboardComponent {
  username: string;

  constructor(session: SessionService) {
    this.username = session.getUsername()
  }

  onItemClicked() {
    window.alert('Item clicked');
  }
}
