import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';


import { HrModule } from './hr/hr.module';
import { CeoModule } from './ceo/ceo.module';
import { EmployeeModule } from './employee/employee.module';
import { HrServiceService } from './services/hr-service.service';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { PMModule } from './pm/pm.module';
import { CommonsModule } from './commons/commons.module';
import { EmployeesComponent } from './commons/employees/employees.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HrModule,
    CeoModule,
    PMModule,
    HttpClientModule,
    CommonsModule
  ],
  exports:[
    NavbarComponent,
    EmployeesComponent
  ],
  bootstrap: [AppComponent] ,
  providers : [HrServiceService]
})
export class AppModule { }
