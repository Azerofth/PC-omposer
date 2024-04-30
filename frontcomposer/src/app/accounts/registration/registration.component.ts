import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { SharedService } from '../../services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  registrationForm: FormGroup;
  verification: boolean = false;
  constructor(private primengConfig: PrimeNGConfig, 
    private formBuilder: FormBuilder, 
    private service: SharedService,
    private route: Router) 
  {
    this.registrationForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      phone_number: ['', Validators.required],
      verification: ['True']
    });
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
}
addUser() {
  console.log(this.registrationForm)
  if (this.registrationForm.valid) {
    this.service.post('user/duplicates/', this.registrationForm.value).subscribe(data => {
      console.log(data)
      if (data === 'ok') {
        this.service.post('register/', this.registrationForm.value).subscribe(data => {
          console.log(data);
          this.route.navigate(['/login'])
        })
      }
      else {
        alert("User data detected, please login to your account.")
        this.route.navigate(['/login'])
      }
    }
    );
  }
  else {
    alert("Please fill in all fields")
    console.log("No data passed")
  }
}
}
