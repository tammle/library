import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { HeaderLogoComponent } from './header/header-logo/header-logo.component';
import { HeaderMenuComponent } from './header/header-menu/header-menu.component';
import { UserAvatarComponent } from './header/user-avatar/user-avatar-component';
import { UserProfileComponent } from './header/user-profile/user-profile.component';

import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    HeaderLogoComponent,
    HeaderMenuComponent,
    UserAvatarComponent,
    UserProfileComponent,
    SidebarComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    HeaderLogoComponent,
    HeaderMenuComponent,
    UserAvatarComponent,
    UserProfileComponent,
    SidebarComponent,
    LoginComponent,
    CommonModule,
    FormsModule
  ]
})
export class NgxDashboardModule { }
