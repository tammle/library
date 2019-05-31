import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxDashboardModule } from 'ngx-dashboard-tammle';

import { AppComponent } from './app.component';
import { ProfileDialogComponent } from './profile-dialog/profile-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileDialogComponent
  ],
  imports: [
    BrowserModule,
    NgxDashboardModule,
    TabsModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ProfileDialogComponent]
})
export class AppModule { }
