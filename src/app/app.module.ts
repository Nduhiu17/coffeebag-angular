import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForumsComponent } from './components/forums/forums.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { ForumItemComponent } from './components/forum-item/forum-item.component';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AddForumComponent } from './components/add-forum/add-forum.component';
import { PostForumComponent } from './components/post-forum/post-forum.component';

@NgModule({
  declarations: [
    AppComponent,
    ForumsComponent,
    HeaderComponent,
    ForumItemComponent,
    AboutComponent,
    ContactsComponent,
    AddForumComponent,
    PostForumComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
