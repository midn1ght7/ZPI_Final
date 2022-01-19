import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentItemComponent } from './student-item/student-item.component';
import { StudentItemEditComponent } from './student-item-edit/student-item-edit.component';
import { StudentItemAddComponent } from './student-item-add/student-item-add.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentItemComponent,
    StudentItemEditComponent,
    StudentItemAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
