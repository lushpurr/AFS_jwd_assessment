import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers/customers.component';
import { EmployeesComponent } from './employees/employees.component';




@NgModule({
  declarations: [
    CustomersComponent,
    EmployeesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
