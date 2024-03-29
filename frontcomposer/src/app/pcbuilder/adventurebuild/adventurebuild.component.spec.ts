import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventurebuildComponent } from './adventurebuild.component';

describe('AdventurebuildComponent', () => {
  let component: AdventurebuildComponent;
  let fixture: ComponentFixture<AdventurebuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdventurebuildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdventurebuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
