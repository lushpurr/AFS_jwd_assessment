import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './home/customers/customers.component';
import { EmployeesComponent } from './home/employees/employees.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'home/customers', component: CustomersComponent },
  { path: 'home/employees', component: EmployeesComponent },
  { path: '**', component: HomeComponent},
  { path: '', redirectTo: '/dashboard', pathMatch:'full'}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
