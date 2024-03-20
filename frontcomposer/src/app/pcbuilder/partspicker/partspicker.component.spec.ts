import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartspickerComponent } from './partspicker.component';

describe('PartspickerComponent', () => {
  let component: PartspickerComponent;
  let fixture: ComponentFixture<PartspickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartspickerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartspickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
