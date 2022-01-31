import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Thanks1Component } from './thanks1.component';

describe('Thanks1Component', () => {
  let component: Thanks1Component;
  let fixture: ComponentFixture<Thanks1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Thanks1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Thanks1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
