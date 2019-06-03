import { Component } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  host: { 'class': 'vh-100' }
})
export class DashboardComponent {
  onItemClicked() {
    window.alert('Item clicked');
  }
}
