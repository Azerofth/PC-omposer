import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  items: MenuItem[] | undefined;
  activeItem: MenuItem | undefined;
  ngOnInit() {
    this.items = [
        { label: 'Home', icon: 'pi pi-fw pi-home' },
        { label: 'Build a computer', icon: 'pi pi-fw pi-calendar' },
        { label: 'Edit a computer', icon: 'pi pi-fw pi-pencil' },
        { label: 'Settings', icon: 'pi pi-fw pi-cog' }
    ];

    this.activeItem = this.items[0];
}
}
