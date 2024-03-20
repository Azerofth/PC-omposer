import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartslistComponent } from './partslist.component';

describe('PartslistComponent', () => {
  let component: PartslistComponent;
  let fixture: ComponentFixture<PartslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartslistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
