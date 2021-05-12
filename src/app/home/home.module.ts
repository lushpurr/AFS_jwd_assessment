import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { CustomersComponent } from './customers/customers.component';
import { EmployeesComponent } from './employees/employees.component';



@NgModule({
  declarations: [
    CustomersComponent,
    EmployeesComponent
  ],
  imports: [
    CommonModule, 
    HomeRoutingModule
  ]
})
export class HomeModule { }
