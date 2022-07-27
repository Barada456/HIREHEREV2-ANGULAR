import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeoSidebarComponent } from './ceo-sidebar.component';

describe('CeoSidebarComponent', () => {
  let component: CeoSidebarComponent;
  let fixture: ComponentFixture<CeoSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeoSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeoSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
