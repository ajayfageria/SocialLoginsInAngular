import { Component, OnInit } from '@angular/core';
import { Socialusers } from '../model/socialusers-model';
import { SocialUser, AuthService } from 'angularx-social-login';
import { Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  socialusers=new Socialusers();  
  user:any= SocialUser;
   gapi : any;
   isAuthenticated: boolean;
   
  constructor(private router:Router,private auth2:AuthService,public oktaAuth:OktaAuthService) {
   
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );
   }

  async ngOnInit() {
     this.isAuthenticated = await this.oktaAuth.isAuthenticated();
  } 
logOut(){
  this.socialusers=null;
  localStorage.clear(); 
   
    sessionStorage.clear();
   // this.oktaAuth.logout('/login');
 
console.log("after logout the social user data:-"+this.socialusers)

// console.log(this.socialusers.idToken);
// console.log(this.socialusers.image);
// console.log(this.socialusers.name);
this.router.navigate([`/login`]); 
}

}
   