import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandResourceComponent } from './demand-resource.component';

describe('DemandResourceComponent', () => {
  let component: DemandResourceComponent;
  let fixture: ComponentFixture<DemandResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandResourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
