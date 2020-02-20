import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEmployeeComponent } from './employee/show-employee/show-employee.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { DepartmentsComponent } from './departments/departments.component';
import { ShowDepartmentComponent } from './departments/show-department/show-department.component';
import { EditDepartmentComponent } from './departments/edit-department/edit-department.component';
import { AddDepartmentComponent } from './departments/add-department/add-department.component';
import { EmployeeService } from './services/employee.service';
import { DepartmentService } from './services/department.service';
import { MaterialModule } from './material/material.module';  
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule, MatNativeDateModule, MatInputModule, MatProgressSpinnerModule,} from '@angular/material';
import { SignupComponent } from './user/signup/signup.component';
import { LoginComponent } from './user/login/login.component';
import { SocialLoginModule, AuthServiceConfig, AuthService } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider} from "angularx-social-login";
import { HomeComponent } from './home/home.component';
import {
  OKTA_CONFIG,OktaAuthGuard,OktaCallbackComponent,OktaLoginRedirectComponent,
  OktaAuthModule
} from '@okta/okta-angular';
import { Routes } from '@angular/router';
const oktaConfig = {
  issuer: '',
  clientId: '0oa27amqjaBVwXc9m4x6',
  redirectUri: '',

} 

export function socialConfigs() {  
  const config = new AuthServiceConfig(     
    [   
        
      {  
        id: GoogleLoginProvider.PROVIDER_ID,  
        provider: new GoogleLoginProvider('956008437325-c9mbgc6q7fa2rlt46phfdmejnemd91o3.apps.googleusercontent.com')  
      } ,
      {  
        id: FacebookLoginProvider.PROVIDER_ID,  
        provider: new FacebookLoginProvider('205246234000921')  
      } ,
      
      // {  
      //   id: LinkedinLoginProvider.PROVIDER_ID,  
      //   provider: new LinkedinLoginProvider('205246234000921')  
      // } 
    ]  
  );  
  return config;  
} 
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ShowEmployeeComponent,
    EditEmployeeComponent,
    AddEmployeeComponent,
    DepartmentsComponent,
    ShowDepartmentComponent,
    EditDepartmentComponent,
    AddDepartmentComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,SocialLoginModule,
    BrowserAnimationsModule,
    MaterialModule,HttpClientModule,
    FormsModule,ReactiveFormsModule,MatDatepickerModule,
    MatNativeDateModule,MatInputModule,OktaAuthModule,
    
  ],

  providers: [DepartmentService,EmployeeService, AuthService,  
    {  
      provide: AuthServiceConfig,  
      useFactory: socialConfigs  
    } ,
  
    { provide: OKTA_CONFIG, useValue: oktaConfig }
  ],
  bootstrap: [AppComponent],
  entryComponents:[AddDepartmentComponent,EditDepartmentComponent,AddEmployeeComponent,EditEmployeeComponent],
})

export class AppModule { }
