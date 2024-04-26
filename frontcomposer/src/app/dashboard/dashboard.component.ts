import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { SharedService } from '../services/shared.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  updateGroup: FormGroup;

  menuItems: MenuItem[] = [
    { label: 'Home', icon: 'pi pi-fw pi-home', command: () => this.selectItem(1) },
    { label: 'Settings', icon: 'pi pi-fw pi-cog', command: () => this.selectItem(2) }
  ];
  activeItem: MenuItem | undefined;
  tokenID = parseInt(localStorage.getItem('token') || '');
  
  id: number = this.tokenID +1; //admin is 1 so any other users will be +1 of it.
  constructor(private formBuilder: FormBuilder, private service: SharedService, private route: Router, private activatedRoute: ActivatedRoute) {
    
    this.updateGroup = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      id: [this.id]
    })
  }
  computerList!: any[];

  selectedItem: number = 1;
  selectItem(item: number) {
    this.selectedItem = item;
    this.activeItem = this.menuItems[item - 1];
  }
  ngOnInit() {
    this.service.post('computer/getUserComputers/', this.id).subscribe((data: any) => {
      this.computerList = Object.values(data);
    });
    this.getUser();
  }
  getUser() {
    this.service.post('user/getUserData/', this.id).subscribe((data: any) => {
      this.updateGroup.patchValue({
        username: data.username,
        password: data.password,
        email: data.email
      });
    });
  }
  updateUser() {
    if (this.updateGroup.valid) {
      this.service.patch('user/' + this.id + '/', this.updateGroup.value).subscribe((data: any) => {
        this.service.post('user/updateUser/', this.updateGroup.value).subscribe((data: any) => {
          this.route.navigate(['dashboard']);
        }
        );
      });
    }
    else {
      alert('Please fill out all fields');
    }
  }
}

