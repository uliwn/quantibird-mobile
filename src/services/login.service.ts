import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    // this.baseUrl = '';
    // this.baseUrl = 'http://quantibird.herokuapp.com';
    this.baseUrl = 'http://localhost:3000';
  }

  login(credentials): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/api/login`, credentials);
  }

    /*  Login Dark Data
    ========================*/
    getDataForLoginDark = () => {
        let data = {
            "backgroundImages": "assets/images/dark-1.jpg",
            "title": "Fashion Store",
            "btnLogin": "Login",
            "btnSignUp": "Signup",
            "txtUsername" : "Username",
            "txtPassword" : "Password",
            "txtForgotPassword" : "Forgot password?",
            "btnResetYourPassword": "Reset your password",
            "txtSignupnow" : "Don't have an account?",
            "btnSignupnow": "Signup now",
            "btnLoginNow" : "Login now",
            "errorUser" : "Field can't be empty.",
            "errorPassword" : "Field can't be empty."         
        };
        return data;
    };

    /*  Login Universal Data
    ==============================*/
    getDataForLoginFlat = () => {
        let data = {
            "logo": "assets/images/csform-logo.png",
            "btnLogin": "Login",
            "txtUsername" : "Username",
            "txtPassword" : "Password",
            "txtForgotPassword" : "Forgot password?",
            "btnResetYourPassword": "Reset your password",
            "txtSignupnow" : "Don't have an account?",
            "btnSignupnow": "Signup now",
            "title": "Welcome back,",
            "subtitle": "please login to your account.",
            "errorUser" : "Field can't be empty.",
            "errorPassword" : "Field can't be empty."
        };
        return data;
    };

    /*  Login Light Data
    ==============================*/
    getDataForLoginLight = () => {
        let data = {
            "backgroundImages": "assets/images/light-3.jpg",
            "btnLogin": "Login",
            "txtEmail" : "Email",
            "txtPassword" : "Password",
            "txtLogin": "Login",
            "title": "Tech Shop",
            "txtForgotPassword" : "Forgot password?",
            "btnResetYourPassword": "Reset your password",
            "txtSignupnow" : "Don't have an account?",
            "btnSignupnow": "Signup now",
            "errorEmail" : "Field can't be empty.",
            "errorPassword" : "Field can't be empty."
        };
        return data;
    };
}
