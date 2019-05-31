import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ProfileDialogComponent } from './profile-dialog/profile-dialog.component';

@Component({
  selector: 'dashboard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dashboard Library';
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}

  onItemClicked() {
    window.alert('Item clicked');
  }

  showProfilePopup(user) {
    const initialState = {
      title: 'Profile Dialog',
      username: user.name,
      password: user.password,
      closeBtnName: 'Close'
    };
    this.modalRef = this.modalService.show(ProfileDialogComponent, { initialState });

  }
}
