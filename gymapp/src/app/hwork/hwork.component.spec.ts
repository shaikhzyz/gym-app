import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HworkComponent } from './hwork.component';

describe('HworkComponent', () => {
  let component: HworkComponent;
  let fixture: ComponentFixture<HworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
