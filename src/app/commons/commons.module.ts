import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees/employees.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    EmployeesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports:[
    EmployeesComponent
  ]
})
export class CommonsModule { }
