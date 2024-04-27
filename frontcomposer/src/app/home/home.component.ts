import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';

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
    private router: Router,
    private service: SharedService
  ){
    
    this.promptForm = this.formBuilder.group({
      prompt: ['', Validators.required],
    });
  }
  
  onSubmit(){
    const promptValue = this.promptForm.value.prompt;
    if (promptValue == null || promptValue == '') {
      alert('Please enter a prompt');
      return;
    }
    else{
      this.router.navigate(['/prompt'], { queryParams: { prompt: promptValue } });
    }
  }
  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    if (token == null) {
      return false;
    }
    return true;
  }
  computerList!: any[];
  ngOnInit() {
    this.primengConfig.ripple = true;
    this.service.post("computer/getComputersList/").subscribe((data: any) => {
      this.computerList = Object.values(data);
    });
}
}
