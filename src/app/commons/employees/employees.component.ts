import { Component, OnInit } from '@angular/core';
import { Stomp } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.connectEmployeeExtraction();
  }


  employeeArray: Employee[] = [];

  connectEmployeeExtraction() {
    var socket = new SockJS('http://localhost:9090/gs-guide-websocket');
    let stompClient: any;
    stompClient = Stomp.over(socket);
    stompClient.connect({}, (frame: any) => {
      stompClient.send('/app/extractAllEmployees');

      stompClient.subscribe(
        '/message/allemployee',
        (details: any) => {
          this.getEmployeesOnSocket(details.body);
        }
      );
    });


  }

  getEmployeesOnSocket(employees: any) {
    //console.log('getEmployees called');
    this.employeeArray = [];
    const obj = JSON.parse(employees);
    obj.employees.forEach((element: any) => {
      //console.log(element);
      this.employeeArray.push(
        new Employee(
          element.empNo,
          element.empName,
          element.empAddress,
          element.empMobNo,
          element.empEmail,
          element.empDob,
          element.empDoj,
          element.empDesignation,
          element.reportingTo,
          element.empDepartment,
          element.empProfileImage,
          element.isAvailable
        )
      );
    });
  }

}
