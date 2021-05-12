import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { CustomersComponent } from './home/customers/customers.component';
import { EmployeesComponent } from './home/employees/employees.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeGuard } from './home/home.guard';
//Bug fix
import { NO_ERRORS_SCHEMA  } from '@angular/core';


const routes: Routes = [
  // { path: 'home', component: HomeComponent }, 

  // { 
  //   path: 'home', 
  //   canLoad: [HomeGuard],
  //   loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  // },
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

  { 
    path: 'auth',
    component: AuthComponent,
    canActivate: [AuthGuard]
  },
    // Wildcard 
  { path: '**', component: HomeComponent },
    // Redirects when hit the home url
  { path: '', redirectTo: '/home', pathMatch:'full'},
 
];

@NgModule({
  schemas: [ NO_ERRORS_SCHEMA ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
