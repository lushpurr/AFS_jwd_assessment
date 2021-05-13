import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeRoutingModule } from './home-routing.module';

// ant design 
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CustomersComponent } from './customers/customers.component';
import { EmployeesComponent } from './employees/employees.component';
import { NzImageModule } from 'ng-zorro-antd/image';


//Bug fix
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';




@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
    CustomersComponent,
    EmployeesComponent,
    
  ],
  imports: [
    CommonModule, 
    BrowserModule,
    HomeRoutingModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzTableModule,
    NzPageHeaderModule,
    NzMenuModule,
    NzIconModule,
    NzImageModule
  ]

})
export class HomeModule { }
