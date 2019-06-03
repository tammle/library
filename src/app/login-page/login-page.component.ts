import { Component } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ProfileDialogComponent } from "../profile-dialog/profile-dialog.component";

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent {
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}

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
