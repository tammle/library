import { Component } from '@angular/core';

@Component({
  selector: 'dashboard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dashboard Library';

  onItemClicked() {
    window.alert('Item clicked');
  }

  showProfilePopup(user) {
    window.alert(`${user.name} - ${user.password}`)
  }
}
