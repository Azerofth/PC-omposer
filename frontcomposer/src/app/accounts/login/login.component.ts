import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(
    private primengConfig: PrimeNGConfig,  
    private formBuilder: FormBuilder, 
    private authservice: AuthService
  ){
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  onSubmit(){
    this.authservice.login(this.loginForm.value.email, this.loginForm.value.password);
  }
  ngOnInit() {
    this.primengConfig.ripple = true;
}}
