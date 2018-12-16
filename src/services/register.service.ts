import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable()
export class RegisterService {

  baseUrl: string;

  constructor(private http: HttpClient) {
      // this.baseUrl = '';
      // this.baseUrl = 'http://quantibird.herokuapp.com';
      this.baseUrl = 'http://localhost:3000';
  }

  register(user: User): Observable<User> {
      return this.http.post<User>(`${this.baseUrl}/api/user`, user);
  }

    /*  Register Dark Data
    ========================*/
    getDataForRegisterDark = () => {
        return {
            "backgroundImages": "assets/images/dark-2.jpg",
            "title": "Fashion Store",
            "btnLogin": "Login",
            "btnSignUp": "Signup",
            "txtUsername" : "Username",
            "txtEmail" : "Email",
            "txtPassword" : "Password",
            "txtAgreeText" : "By creating an account you agree to our",
            "btnTerms": "Terms & Conditions",
            "and" : "and",
            "btnPrivacy": "Privacy Policy",
            "btnSignupNow": "Sign up now",
            "errorUser" : "Field can't be empty.",
            "errorPassword" : "Field can't be empty.",
            "errorEmail": "Invalid email address."
        };
    };

    /*  Register Universal Data
    ============================*/
    getDataForRegisterFlat = () => {
        return {
            "logo": "assets/images/csform-logo.png",
            "title": "Welcome,",
            "subtitle": "sign up and enjoy our app.",
            "btnSignUp": "Sign up",
            "txtUsername" : "Username",
            "txtEmail" : "Email",
            "txtPassword" : "Password",
            "txtAgreeText" : "By creating an account you agree to our",
            "btnTerms": "Terms & Conditions",
            "and" : "and",
            "btnPrivacy": "Privacy Policy",
            "background": "",
            "errorUser" : "Field can't be empty.",
            "errorPassword" : "Field can't be empty.",
            "errorEmail": "Invalid email address."
        };
    };

    /*  Register Light Data
    ========================*/
    getDataForRegisterLight = () => {
        return {
            "backgroundImages": "assets/images/light-1.jpg",
            "txtSignup": "Signup",
            "btnSignUp": "Sign up",
            "txtAgreeText" : "By creating an account you agree to our",
            "btnTerms": "Terms & Conditions",
            "and" : "and",
            "btnPrivacy": "Privacy Policy",
            "txtFirstName" : "First name",
            "txtLastName" : "Last name",
            "txtEmail" : "Email",
            "title": "Tech Shop",
            "errorFistName" : "Field can't be empty.",
            "errorLastName" : "Field can't be empty.",
            "errorEmail": "Invalid email address."
        };
    }
}
