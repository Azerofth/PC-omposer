import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { SharedService } from '../services/shared.service';
import { ActivatedRoute, Router } from '@angular/router';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';


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
  constructor(private formBuilder: FormBuilder, private service: SharedService, private router: Router, private activatedRoute: ActivatedRoute) {
    
    this.updateGroup = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      id: [this.id]
    })
  }
  computerList!: any[];
  confirm! : string[];
  selectedItem: number = 1;
  selectItem(item: number) {
    this.selectedItem = item;
    this.activeItem = this.menuItems[item - 1];
  }
  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    if (token == null) {
      alert('Please login to access this page');
      this.router.navigate(['/login']);
      return false;
    }
    return true;
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
          this.confirm = Object.values(data);
          if (this.confirm[0] == 'ok') {
            alert('User updated successfully');
            this.router.navigate(['dashboard']);
          }
        }
        );
      });
    }
    else {
      alert('Please fill out all fields');
    }
  }
  ngOnInit() {
    this.service.post('computer/getUserComputers/', this.id).subscribe((data: any) => {
      this.computerList = Object.values(data);
    });
    this.getUser();
    this.isLoggedIn();
  }

  public convetToPDF() {
    var data = document.getElementById('contentToConvert');
    if (data) {
      html2canvas(data).then(canvas => {
        // Few necessary setting options
        var imgWidth = 208;
        var pageHeight = 295;
        var imgHeight = canvas.height * imgWidth / canvas.width;
        var heightLeft = imgHeight;
        const contentDataURL = canvas.toDataURL('image/png')
        let pdf = new jspdf('l', 'mm', 'a5'); // A4 size page of PDF
        var position = 0;
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
        pdf.save('computer_spec.pdf'); // Generated PDF
      });
    }
  }
}

