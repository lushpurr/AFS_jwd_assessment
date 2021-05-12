import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { CustomersComponent } from './customers/customers.component';
import { EmployeesComponent } from './employees/employees.component';
// ant design 
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzTableModule } from 'ng-zorro-antd/table';






@NgModule({
  declarations: [
    CustomersComponent,
    EmployeesComponent,
    
  ],
  imports: [
    CommonModule, 
    HomeRoutingModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzTableModule
  ]
})
export class HomeModule { }
