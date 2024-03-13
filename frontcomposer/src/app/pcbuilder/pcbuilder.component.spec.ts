import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcbuilderComponent } from './pcbuilder.component';

describe('PcbuilderComponent', () => {
  let component: PcbuilderComponent;
  let fixture: ComponentFixture<PcbuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PcbuilderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PcbuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
