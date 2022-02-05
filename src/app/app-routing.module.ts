import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './screens/contacts/contacts.component';
import { UsersComponent } from './screens/users/users.component';

const routes: Routes = [
  { path:'', component: UsersComponent },
  { path:'contacts', component: ContactsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
