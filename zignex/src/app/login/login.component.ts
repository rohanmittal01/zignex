import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  error = '';
  siteKey: string;
  model: any = {};
  captchaValue = false;
  passwordPattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d\\W]{8,63}$";
  constructor(private route: Router) {
    this.siteKey = '6Ld-XOQZAAAAAPFx8PwFhzqofLoaQoa0t7WR2DAI';
   }

  ngOnInit(){
    // if (this.authService.loggedIn){
    //   this.route.navigate(['/']);
    // }
  }

  login(){
    console.log(this.model);
    console.log(this.captchaValue);
    if(this.captchaValue == false){
      this.error = 'Invalid Captcha';
    }else{
      this.error = 'Success';
    }
    // this.authService.login(this.model).subscribe((next: any) => {
    //   console.log(next);
    //   this.alertify.success('Logged in successfully');
    //   localStorage.setItem('token', next.token);
    //   window.location.reload();
    //   this.route.navigate(['/']);
    // }, error => {
    //   console.log(error.error);
    //   this.alertify.error(error.error);
    // });
  }

}
