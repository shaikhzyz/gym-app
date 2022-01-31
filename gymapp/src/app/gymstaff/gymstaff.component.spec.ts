import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymstaffComponent } from './gymstaff.component';

describe('GymstaffComponent', () => {
  let component: GymstaffComponent;
  let fixture: ComponentFixture<GymstaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymstaffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GymstaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
