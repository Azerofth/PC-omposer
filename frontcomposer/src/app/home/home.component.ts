import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  promptForm: FormGroup;
  messages: Message[] | undefined;
  addMessages() {
    this.messages = [
        { severity: 'error', summary: 'Error', detail: 'Message Content' }
    ];
}
  constructor(
    private primengConfig: PrimeNGConfig,  
    private formBuilder: FormBuilder,
    private router: Router,
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
    return token === 'loggedin';
  }
  ngOnInit() {
    this.primengConfig.ripple = true;
}
}
