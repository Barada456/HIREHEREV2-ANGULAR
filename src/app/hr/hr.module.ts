import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';
import { HrSidebarComponent } from './hr-sidebar/hr-sidebar.component';
import { HrpageComponent } from './hrpage/hrpage.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HrServiceService } from '../services/hr-service.service';
import { InterviewPanelComponent } from './interview-panel/interview-panel.component';
import {RouterModule} from '@angular/router';
import { OnboardEmployeeComponent } from './onboard-employee/onboard-employee.component';
import { ScheduleInterviewsComponent } from './schedule-interviews/schedule-interviews.component';
import { InterviewsComponent } from './interviews/interviews.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    HrDashboardComponent,
    HrSidebarComponent,
    HrpageComponent,
    InterviewPanelComponent,
    OnboardEmployeeComponent,
    ScheduleInterviewsComponent,
    InterviewsComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  exports:[
    HrSidebarComponent,
    HrDashboardComponent,
    HrpageComponent
  ],
  providers: [
    HrServiceService
  ]
})
export class HrModule { }
