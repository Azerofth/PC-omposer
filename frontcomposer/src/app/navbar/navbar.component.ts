import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  navOpen: boolean = false;
  constructor(public router: Router, private primengConfig: PrimeNGConfig){}
  toggleNav(): void {
    this.navOpen = !this.navOpen;
  }
  ngOnInit() {
    this.primengConfig.ripple = true;
}}
