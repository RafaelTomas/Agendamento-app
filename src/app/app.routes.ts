import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'contatos', component: ContactsComponent },
];
