import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logout(): void {
    // logout function
  }
  login(email: string, password: string): void {
    // login function
    console.log(email);
    console.log(password);
    this.service.post('login/', {email, password})
      .subscribe(
        (response: any) => {
          if (response.status === 'ok') {
            console.log(response.status)
          } else {
            console.log(response.status);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }
  constructor(private service: SharedService, private router: Router) { }
}
