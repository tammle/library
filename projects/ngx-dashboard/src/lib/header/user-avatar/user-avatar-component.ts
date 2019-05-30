import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-avatar',
  templateUrl: './user-avatar.component.html'
})
export class UserAvatarComponent {
  @Input() title: string;
  @Input() avatarUrl: string;
  @Input() profileLink: string;
}
