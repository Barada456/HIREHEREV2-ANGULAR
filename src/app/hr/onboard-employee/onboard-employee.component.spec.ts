import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardEmployeeComponent } from './onboard-employee.component';

describe('OnboardEmployeeComponent', () => {
  let component: OnboardEmployeeComponent;
  let fixture: ComponentFixture<OnboardEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
