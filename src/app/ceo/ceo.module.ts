import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeoDashboardComponent } from './ceo-dashboard/ceo-dashboard.component';
import { CeoSidebarComponent } from './ceo-sidebar/ceo-sidebar.component';
import { CeopageComponent } from './ceopage/ceopage.component';
import { RouterModule } from '@angular/router';
import { AddProjectComponent } from './add-project/add-project.component';



@NgModule({
  declarations: [
    CeoDashboardComponent,
    CeoSidebarComponent,
    CeopageComponent,
    AddProjectComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class CeoModule { }
