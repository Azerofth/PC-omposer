import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-pcbuilderhome',
  templateUrl: './pcbuilderhome.component.html',
  styleUrl: './pcbuilderhome.component.css'
})

export class PcbuilderhomeComponent {
  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    if (token == null) {
      return false;
    }
    return true;
  }

}
