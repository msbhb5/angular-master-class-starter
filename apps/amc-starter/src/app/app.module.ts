import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContactsMaterialModule } from './contacts-material.module';

import { ContactsAppComponent } from './app.component';
import { ContactsNgRxModule } from './contacts-ngrx.module';
import { ContactsService } from './contacts.service';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { API_ENDPOINT } from './app.token';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactsAppComponent, ContactsListComponent, ContactsDetailComponent, ContactsEditorComponent],
  providers: [{provide: API_ENDPOINT, useValue: 'http://localhost:4201/api'}, ContactsService],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ContactsMaterialModule,
    ContactsNgRxModule,
    FlexLayoutModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule,
    FormsModule
  ],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {}
