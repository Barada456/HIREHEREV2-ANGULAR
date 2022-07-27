import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleInterviewsComponent } from './schedule-interviews.component';

describe('ScheduleInterviewsComponent', () => {
  let component: ScheduleInterviewsComponent;
  let fixture: ComponentFixture<ScheduleInterviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleInterviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleInterviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
