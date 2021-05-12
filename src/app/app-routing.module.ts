import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { CustomersComponent } from './home/customers/customers.component';
import { EmployeesComponent } from './home/employees/employees.component';

const routes: Routes = [
  { 
    path: 'home', 
    component: HomeComponent,
    children: [
      {
        path: 'customers',
        component: CustomersComponent, 
      },
      {
        path: 'employees',
        component: EmployeesComponent,
      }
    ] 
  },

    // { path: 'auth', component: AuthComponent },
    // Wildcard 
    { path: '**', component: HomeComponent }, 
    // Redirects when hit the home url
    { path: '', redirectTo: '/home', pathMatch:'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
