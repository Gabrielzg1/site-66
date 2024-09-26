import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ServiceComponent } from './pages/service/service.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, 
    { path: 'home', component: HomeComponent }, 
    { path: 'sobre', component: AboutComponent },
    { path: 'contato', component: ContactComponent },
    { path: 'servico', component: ServiceComponent },
    { path: '**', redirectTo: 'home' } 
];
