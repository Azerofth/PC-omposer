import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-partspicker',
  templateUrl: './partspicker.component.html',
  styleUrl: './partspicker.component.css'
})

export class PartspickerComponent {
  cpuList!: any[];
  gpuList!: any[];
  motherboardList!: any[];
  ramList!: any[];
  storageList!: any[];
  psuList!: any[];
  caseList!: any[];
  computerForm: FormGroup;
  constructor(private route: ActivatedRoute, private service: SharedService, private formBuilder: FormBuilder) {
    this.computerForm = this.formBuilder.group({
      cpuID: ['', Validators.required],
      gpuID: ['', Validators.required],
      motherboardID: ['', Validators.required],
      ramID: ['', Validators.required],
      storageID: ['', Validators.required],
      psuID: ['', Validators.required],
      caseID: ['', Validators.required],
      userID: [localStorage.getItem('token') ]
    });
   }
  onSubmit() {
    console.log(this.computerForm);
    if (this.computerForm.valid) {
      this.service.post('computer/uploadComputer/', this.computerForm.value).subscribe(data => {
        console.log(data);
      });
    } else {
      console.log("No data passed");
    }
  }
  ngOnInit() {
  this.service.get('cpu/').subscribe(data => {
    this.cpuList = Object.values(data);
  });
  this.service.get('gpu/').subscribe(data => {
    this.gpuList = Object.values(data);
  });
  this.service.get('motherboard/').subscribe(data => {
    this.motherboardList = Object.values(data);
  });
  this.service.get('ram/').subscribe(data => {
    this.ramList = Object.values(data);
  });
  this.service.get('storage/').subscribe(data => {
    this.storageList = Object.values(data);
  });
  this.service.get('powersupply/').subscribe(data => {
    this.psuList = Object.values(data);
  });
  this.service.get('case/').subscribe(data => {
    this.caseList = Object.values(data);
  });
}
}
