import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookingsComponent } from './bookings/bookings.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { ContactComponent } from './contact/contact.component';
import { CommonModule } from '@angular/common';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'bookings', component: BookingsComponent },
  { path: 'invoices', component: InvoicesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
export const appRouting = RouterModule.forRoot(routes);
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule],

  declarations: []
})
export class AppRoutingModule { }
