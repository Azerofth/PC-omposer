import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logout(): void {
    // logout function
  }
  login(username: string, password: string): void {
    // login function
    console.log(username);
    console.log(password);

  }
  constructor() { }
}
