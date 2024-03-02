import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: 'login', component: LoginFormComponent},
  {path: 'contacts', component: ContactListComponent},
  {path: 'contact/:id', component: ContactFormComponent},
  {path: 'contact', component: ContactFormComponent},
  {path: '', component: LoginFormComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
