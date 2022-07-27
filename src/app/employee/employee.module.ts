import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeSidebarComponent } from './employee-sidebar/employee-sidebar.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmployeePageComponent } from './employee-page/employee-page.component';



@NgModule({
  declarations: [
    EmployeeSidebarComponent,
    EmployeeDashboardComponent,
    EmployeePageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EmployeeModule { }
