import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForumsComponent } from './components/forums/forums.component';
import { HeaderComponent } from './components/layout/header/header.component';
// import { ForumComponent } from './services/forum/forum.component';
import { ForumItemComponent } from './components/forum-item/forum-item.component';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AddForumComponent } from './components/add-forum/add-forum.component';

@NgModule({
  declarations: [
    AppComponent,
    ForumsComponent,
    HeaderComponent,
    // ForumComponent,
    ForumItemComponent,
    AboutComponent,
    ContactsComponent,
    AddForumComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
