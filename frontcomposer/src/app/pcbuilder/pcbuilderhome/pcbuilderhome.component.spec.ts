import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcbuilderhomeComponent } from './pcbuilderhome.component';

describe('PcbuilderhomeComponent', () => {
  let component: PcbuilderhomeComponent;
  let fixture: ComponentFixture<PcbuilderhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PcbuilderhomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PcbuilderhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
