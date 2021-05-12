import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { CustomersComponent } from './home/customers/customers.component';
import { EmployeesComponent } from './home/employees/employees.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  
  { 
    path: 'home', 
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
