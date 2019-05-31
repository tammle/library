import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxDashboardModule } from 'ngx-dashboard-tammle';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProfileDialogComponent } from './profile-dialog/profile-dialog.component';
import { PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { MainPageComponent } from './main-page/main-page.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: MainPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileDialogComponent,
    LoginPageComponent,
    PageNotFoundComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    NgxDashboardModule,
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ProfileDialogComponent]
})
export class AppModule { }
