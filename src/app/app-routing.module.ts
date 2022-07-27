import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProjectComponent } from './ceo/add-project/add-project.component';
import { CeopageComponent } from './ceo/ceopage/ceopage.component';
import { EmployeesComponent } from './commons/employees/employees.component';
import { EmployeePageComponent } from './employee/employee-page/employee-page.component';
import { HrpageComponent } from './hr/hrpage/hrpage.component';
import { InterviewPanelComponent } from './hr/interview-panel/interview-panel.component';
import { OnboardEmployeeComponent } from './hr/onboard-employee/onboard-employee.component';
import { ScheduleInterviewsComponent } from './hr/schedule-interviews/schedule-interviews.component';
import { DemandResourceComponent } from './pm/demand-resource/demand-resource.component';
import { PmPageComponent } from './pm/pm-page/pm-page.component';
import { ProjectAssignmentComponent } from './pm/project-assignment/project-assignment.component';

const routes: Routes = [
  {
    path: 'hr',
    component: HrpageComponent
  },
  {
    path: 'hr/schedule-interviews',
    component: ScheduleInterviewsComponent
  },
  {
    path: 'hr/interview-panel',
    component: InterviewPanelComponent
  },
  {
    path: 'hr/onboard-employee',
    component: OnboardEmployeeComponent
  },
  {
    path: 'hr/all-employee',
    component: EmployeesComponent
  },
  {
    path: 'pm',
    component: PmPageComponent
  },
  {
    path: 'pm/project-assignment',
    component: ProjectAssignmentComponent
  },
  {
    path: 'pm/demand-resource',
    component: DemandResourceComponent
  },
  {
    path: 'pm/all-employee',
    component: EmployeesComponent
  },

  {
    path: 'ceo',
    component: CeopageComponent
  },
  {
    path: 'ceo/add-project',
    component: AddProjectComponent
  },
  {
    path: 'ceo/all-employee',
    component: EmployeesComponent
  },
  {
    path: 'employee',
    component: EmployeePageComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
