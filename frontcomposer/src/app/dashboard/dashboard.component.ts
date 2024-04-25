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
  
  id: number = this.tokenID; //admin is 1 so any other users will be +1 of it.
  constructor(private formBuilder: FormBuilder, private service: SharedService, private route: Router, private activatedRoute: ActivatedRoute) {
    
    this.updateGroup = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      id: [this.id + 1]
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
    if (this.activatedRoute.snapshot.params[this.id]) {
      this.id = this.activatedRoute.snapshot.params[this.id];
      this.getUser();
    }
  }

  getUser() {
    this.service.get('user/').subscribe((data: any) => {
      const matchedData = data.find((data: any) => data.user_id == this.id)
    if (matchedData){
      this.updateGroup.patchValue({
        username: matchedData.username,
        password: matchedData.password,
        email: matchedData.email
      });
    }
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

