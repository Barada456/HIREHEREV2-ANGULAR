import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemandResourceComponent } from './demand-resource/demand-resource.component';
import { ProjectAssignmentComponent } from './project-assignment/project-assignment.component';
import { PmPageComponent } from './pm-page/pm-page.component';
import { PmSidebarComponent } from './pm-sidebar/pm-sidebar.component';
import {RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllemployeesComponent } from './allemployees/allemployees.component';


@NgModule({
  declarations: [
    DemandResourceComponent,
    ProjectAssignmentComponent,
    PmPageComponent,
    PmSidebarComponent,
    AllemployeesComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    PmSidebarComponent,
    PmPageComponent
  ]
})
export class PMModule { }
