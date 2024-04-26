import { Component } from '@angular/core';

@Component({
  selector: 'app-adventurebuild',
  templateUrl: './adventurebuild.component.html',
  styleUrl: './adventurebuild.component.css'
})
export class AdventurebuildComponent {
  doSurvey(){
    window.location.href = 'https://forms.gle/4aDwYgpo279AwTLS8';
  }
}
