import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthorsListComponent } from './authors-list/authors-list.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsListComponent,
    AuthorDetailsComponent
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
