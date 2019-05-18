import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForumsComponent } from './components/forums/forums.component';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';

const routes: Routes = [
  { path: '', component: ForumsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contacts', component: ContactsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
