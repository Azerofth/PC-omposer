import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { SharedService } from '../services/shared.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  updateGroup: FormGroup;
  menuItems: MenuItem[] = [
    { label: 'Home', icon: 'pi pi-fw pi-home', command: () => this.selectItem(1) },
    { label: 'Edit', icon: 'pi pi-fw pi-file-edit',command: () => this.selectItem(2) },
    { label: 'Settings', icon: 'pi pi-fw pi-cog', command: () => this.selectItem(3) }
  ];
  activeItem: MenuItem | undefined;
  constructor(private formBuilder: FormBuilder, private service: SharedService, private route: Router) 
  {
    this.updateGroup = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required]
    })
  }

  selectedItem: number = 1;
  selectItem(item: number) {
    this.selectedItem = item;
    this.activeItem = this.menuItems[item - 1];
  }

  NgOnInit() {

  }

}
