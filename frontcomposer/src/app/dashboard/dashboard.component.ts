import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  
  menuItems: MenuItem[] = [
    { label: 'Home', icon: 'pi pi-fw pi-home', command: () => this.selectItem(1) },
    { label: 'Edit', icon: 'pi pi-fw pi-file-edit',command: () => this.selectItem(2) },
    { label: 'Settings', icon: 'pi pi-fw pi-cog', command: () => this.selectItem(3) }
  ];

  selectedItem: number = 1;

  selectItem(item: number) {
    this.selectedItem = item;
  }
}
