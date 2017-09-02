import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { ContactsComponent } from './contacts/contacts.component';
import { PopularComponent } from './popular/popular.component';
import { ContactsService } from "app/contacts.service";
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const routes: Routes = [
  {
    path:'',
    component:PopularComponent
  },
  {
    path:'contacts',
    component: ContactsComponent
  },
  {
    path:'popular',
    component:PopularComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    PopularComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
