import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return token === 'loggedin';
  }
  constructor(public router: Router, private primengConfig: PrimeNGConfig){}
  ngOnInit() {
    this.primengConfig.ripple = true;
    
}}
