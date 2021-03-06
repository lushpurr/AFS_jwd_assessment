import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
// import { AppRoutingModule } from '../app-routing.module';

// ant design 
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTableModule, NzTableSortOrder, NzTableSortFn } from 'ng-zorro-antd/table';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CustomersComponent } from './customers/customers.component';
import { EmployeesComponent } from './employees/employees.component';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzButtonModule } from 'ng-zorro-antd/button';



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
    // AppRoutingModule,
    // BrowserModule,
    HomeRoutingModule,
    // BrowserAnimationsModule,
    NzLayoutModule,
    NzTableModule,
    NzPageHeaderModule,
    NzMenuModule,
    NzIconModule,
    NzImageModule,
    NzButtonModule
  ]

})
export class HomeModule { }
