import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isUserLoggedIn: boolean = false;
  logout(): void {
    this.service.post('logout/').subscribe(
      (response: any) => {
        if (response.status === 'ok') {
          console.log(response.status)
          localStorage.removeItem('token');
          alert('logged out worked')
          this.router.navigate(['logout/']);
        } else {
          console.log(response.status);
          alert("wtf logout fail again");
        }
      },
      (error) => {
        console.log(error);
        alert("Logout fail?");
      }
    );  
  }
  getToken() {
    return localStorage.getItem('token');
  }

  storeToken(token: string) {
    localStorage.setItem('token', token);
  }

  login(username: string, password: string): void {
    // login function
    // console.log(username);
    // console.log(password);
    this.service.post('login/', {username, password})
      .subscribe(
        (response: any) => {
          if (response) {
            console.log(response.status)
            const token = response.token;
            this.storeToken(token);
            this.router.navigate(['dashboard/']);
          } else {
            console.log(response.status);
            alert("Login failed! Please try again!");
          }
        },
        (error) => {
          console.log(error);
          alert("Login failed! Please try again!");
        }
      );
  }
  
  allowuser() {
    const token = localStorage.getItem('token');
    if (token == 'loggedin') {
      console.log("User allowed");
    } else {
      alert("You are not logged in, please login first");
      this.router.navigate(['/home']);
    }
  }

  constructor(private service: SharedService, private router: Router) { }
}
