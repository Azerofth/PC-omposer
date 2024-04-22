import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  promptForm: FormGroup;
  constructor(
    private primengConfig: PrimeNGConfig,  
    private formBuilder: FormBuilder,
    private router: Router 
  ){
    this.promptForm = this.formBuilder.group({
      prompt: ['', Validators.required],
    });
  }
  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return token === 'loggedin';
  }
  onSubmit(){
    console.log(this.promptForm.value);
    const promptValue = this.promptForm.value.prompt;
    this.router.navigate(['prompt'], { queryParams: { prompt: promptValue } });
  }
  ngOnInit() {
    this.primengConfig.ripple = true;
}

}
