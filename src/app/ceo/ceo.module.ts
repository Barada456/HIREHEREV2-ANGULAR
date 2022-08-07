import { NgModule } from '@angular/core';
import { CeoDashboardComponent } from './ceo-dashboard/ceo-dashboard.component';
import { CeoSidebarComponent } from './ceo-sidebar/ceo-sidebar.component';
import { CeopageComponent } from './ceopage/ceopage.component';
import { RouterModule } from '@angular/router';
import { AddProjectComponent } from './add-project/add-project.component';
import { CEOAllemployeesComponent } from './allemployees/allemployees.component';
import { CommonsModule } from '../commons/commons.module';



@NgModule({
  declarations: [
    CeoDashboardComponent,
    CeoSidebarComponent,
    CeopageComponent,
    AddProjectComponent,
    CEOAllemployeesComponent
  ],
  imports: [
    RouterModule,
    CommonsModule
  ]
})
export class CeoModule { }
