import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentsComponent } from './departments/departments.component';
import { LoginComponent } from './user/login/login.component';
import { ShowDepartmentComponent } from './departments/show-department/show-department.component';
import { SignupComponent } from './user/signup/signup.component';
import { ShowEmployeeComponent } from './employee/show-employee/show-employee.component';
import { HomeComponent } from './home/home.component';
import {
  OKTA_CONFIG, OktaAuthGuard, OktaCallbackComponent, OktaLoginRedirectComponent,
  OktaAuthModule
} from '@okta/okta-angular';

const routes: Routes = [
  //{path:'login',component:LoginComponent},
 
  {
    path: 'implicit/callback',
    component: HomeComponent
  },
  {
    path: 'login',
    component:  LoginComponent              //OktaLoginRedirectComponent, 
    
  },  
  {
    path: 'home', component: HomeComponent,
    children: [
      {
        path: 'departments',
        component: DepartmentsComponent,
        
      },
      {
        path: 'employee',
        component: EmployeeComponent
      },
    ],
  },


  // ,children: [
  //   {
  //     // path: '',
  //     // component: ShowEmployeeComponent
  //   },
  // ],},


  { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
