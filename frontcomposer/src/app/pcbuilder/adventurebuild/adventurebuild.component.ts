import { Component } from '@angular/core';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-adventurebuild',
  templateUrl: './adventurebuild.component.html',
  styleUrl: './adventurebuild.component.css'
})
export class AdventurebuildComponent {
  
  first: number = 0;
  rows: number = 1;
  onPageChange(event: PageEvent) {
      this.first = event.first;
      this.rows = event.rows;
}
}
