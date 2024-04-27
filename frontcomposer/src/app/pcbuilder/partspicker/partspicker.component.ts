import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface CPU {
  cpu_name: string,
}

interface GPU {
  gpu_name: string,
}

interface MBO {
  motherboard_name: string,
}

interface RAM {
  ram_name: string,
}

interface Storage {
  storage_name: string,
}

interface PSU {
  power_supply_name: string,
}

interface Case {
  case_name: string,
}

@Component({
  selector: 'app-partspicker',
  templateUrl: './partspicker.component.html',
  styleUrl: './partspicker.component.css'
})

export class PartspickerComponent {
  cpuList!: CPU[];
  selectedCPU!: CPU[];
  gpuList!: GPU[];
  selectedGPU!: GPU[];
  motherboardList!: MBO[];
  selectedMBO!: MBO[];
  ramList!: RAM[];
  selectedRAM!: RAM[];
  storageList!:Storage[];
  selectedStorage!: Storage[];
  psuList!: PSU[];
  selectedPSU!: PSU[];
  caseList!: Case[];
  selectedCase!: Case[];
  tokenID = parseInt(localStorage.getItem('token') || '')
  computerForm: FormGroup;
  constructor(private route: ActivatedRoute, private service: SharedService, private formBuilder: FormBuilder, private router: Router) {
    this.computerForm = this.formBuilder.group({
      cpuID: ['', Validators.required],
      gpuID: ['', Validators.required],
      motherboardID: ['', Validators.required],
      ramID: ['', Validators.required],
      storageID: ['', Validators.required],
      psuID: ['', Validators.required],
      caseID: ['', Validators.required],
      userID: [this.tokenID + 1]
    });
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
  onSubmit() {
    if (this.computerForm.valid) {
      this.service.post('computer/uploadComputer/', this.computerForm.value).subscribe(data => {
      });
      this.router.navigate(['/prompt'])
    } else {
      console.log("No data passed");
      alert('Please select all parts');
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
  this.isLoggedIn();
}
}
