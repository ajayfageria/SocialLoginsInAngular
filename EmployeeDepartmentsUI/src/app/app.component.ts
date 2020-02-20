import { Component,OnInit } from '@angular/core';
import { AuthService, SocialUser } from 'angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'EmployeeDepartmentsUI';
  user:SocialUser;
  constructor(  
    public OAuth: AuthService,  
    private router: Router  
  ) { }  
  ngOnInit(){
    
  }
//   onLogout(){

// localStorage.clear();
// localStorage.removeItem("user");
// sessionStorage.clear();
// sessionStorage.removeItem("user")
// console.log("logout app"+this.user)
// this.router.navigate([`/login`]); 
//   }


}
