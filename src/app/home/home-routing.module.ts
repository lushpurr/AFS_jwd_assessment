import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { EmployeesComponent } from './employees/employees.component';


const routes: Routes = [

  { path: '/customers', component: CustomersComponent }, 
  { path: '/employees', component: EmployeesComponent }, 




  // { 
  //   path: 'home', 
  //   component: HomeComponent,
  //   children: [
  //     {
  //       path: 'customers',
  //       component: CustomersComponent, 
  //     },
  //     {
  //       path: 'employees',
  //       component: EmployeesComponent,
  //     }
  //   ] 
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
