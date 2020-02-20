
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog,MatCardHeader,MatCard} from '@angular/material'
import { Socialusers } from 'src/app/model/socialusers-model';
import { AuthService, GoogleLoginProvider,FacebookLoginProvider ,SocialUser } from 'angularx-social-login';
import { SocialService } from 'src/app/services/social.service';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  response;  
  socialusers=new Socialusers();  
  loggedIn: boolean; 
  username: string;
  password: string;
  user: SocialUser;
  showSpinner;
  auth2:any;
constructor(  
  public OAuth: AuthService,  
  private SocialloginService: SocialService,  
  private router: Router  ,public oktaAuth: OktaAuthService,
) { }  

  @ViewChild('loginRef', {static: true }) loginElement: ElementRef;
  ngOnInit() {

    // this.googleSDK();
  }
  LoginWithGoogle(){
    console.log("loginwithgoogle")
this.OAuth.signIn(GoogleLoginProvider.PROVIDER_ID).then((userdata=>{
  this.user=userdata;
  console.log(this.user);
  this.router.navigate(['/home']); 
  
}))
  }
  LoginWithFacebook(){
    console.log("loginwithfacebook")
    this.OAuth.signIn(FacebookLoginProvider.PROVIDER_ID).then((userdata=>{
      this.user=userdata;
      console.log(this.user);
      this.router.navigate(['/home']); 
      
    }))
  }
  LoginWithOkta(){
    console.log("loggedin with OKTA") 
    this.oktaAuth.loginRedirect('/home');
  }
  login(){
  
  }
//   googleSDK() {
 
//     window['googleSDKLoaded'] = () => {
//       window['gapi'].load('auth2', () => {
//         this.auth2 = window['gapi'].auth2.init({
//           client_id: '956008437325-c9mbgc6q7fa2rlt46phfdmejnemd91o3.apps.googleusercontent.com',
//           cookiepolicy: 'single_host_origin',
//           scope: 'profile email'
//         });
//         this.prepareLoginButton();
//       });
     
//     }
  
//     (function(d, s, id){
//       var js, fjs = d.getElementsByTagName(s)[0];
//       if (d.getElementById(id)) {return;}
//       js = d.createElement(s); js.id = id;
//       js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
//       fjs.parentNode.insertBefore(js, fjs);
//     }(document, 'script', 'google-jssdk'));
 
//   }
//   prepareLoginButton() {
 
//   this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
//     (googleUser) => {
 
//       let profile = googleUser.getBasicProfile();
//       // console.log('Token || ' + googleUser.getAuthResponse().id_token);
//       // console.log('ID: ' + profile.getId());
//       // console.log('Name: ' + profile.getName());
//       // console.log('Image URL: ' + profile.getImageUrl());
//       // console.log('Email: ' + profile.getEmail());
     
 
 
//     }, (error) => {
//       alert(JSON.stringify(error, undefined, 2));
//     });
   
// }
// login(){
  
//   this.router.navigate([`/login`]); 
// }

// LoginWithGoogle(){
  
//   this.OAuth.authState.subscribe((user) => {
//     this.user = user;
//     this.loggedIn = (user != null);
//     if(this.loggedIn){
//       this.router.navigate([`/department`]); 
//     }
//     else{
//     //  this.OAuth.signOut();
//     }
//     console.log(user); 
//   });
//   this.OAuth.signIn(GoogleLoginProvider.PROVIDER_ID);
// }

// // Savesresponse(socialusers: Socialusers) {  
// //   this.SocialloginService.Savesresponse(socialusers).subscribe((res: any) => {  
// //     debugger;  
// //     console.log(res);  
// //     this.socialusers=res;  
// //     this.response = res.userDetail;  
// //     localStorage.setItem('socialusers', JSON.stringify( this.socialusers));  
// //     console.log(localStorage.setItem('socialusers', JSON.stringify(this.socialusers)));  
    
// //   })  
// // }  

// onLogout(){  
//   this.user=null;
//   localStorage.clear();
//   localStorage.removeItem("socialusers");
//   sessionStorage.clear();
//   sessionStorage.removeItem("socialusers")
//   console.log("logout"+this.user)
//   this.router.navigate([`/login`]); 
//     }
} 
