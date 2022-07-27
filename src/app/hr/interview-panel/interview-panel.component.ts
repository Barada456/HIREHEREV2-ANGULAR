import { Component, OnInit } from '@angular/core';
import { Stomp } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { Employee } from 'src/app/models/employee.model';
import { InterviewPanel } from 'src/app/models/interview-panel.model';
import { HrServiceService } from 'src/app/services/hr-service.service';

@Component({
  selector: 'app-interview-panel',
  templateUrl: './interview-panel.component.html',
  styleUrls: ['./interview-panel.component.css']
})
export class InterviewPanelComponent implements OnInit {

  panelsArray: InterviewPanel[] = [];

  empObj!: any;

  employeeArray: Employee[] = [];

  constructor(private HrService: HrServiceService) { }

  ngOnInit(): void {
    this.connectEmployeeExtraction();
    this.connectPanelExtraction();
  }



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


  connectPanelExtraction() {
    var socket = new SockJS('http://localhost:9090/gs-guide-websocket');
    let stompClient: any;
    stompClient = Stomp.over(socket);

    stompClient.connect({}, (frame: any) => {
      stompClient.send('/app/extractAllPanels');
      stompClient.subscribe(
        '/message/allpanel',
        (details: any) => {
          this.getPanelsOnSocket(details.body);
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

  savePanelData(panelData: any) {
    console.log(JSON.stringify(panelData));
    let stompClient: any;
    this.HrService.savePanel(panelData).subscribe(
      (response) => {

        alert(response);
        //Refreshing Panel list after onboarding new one
        this.connectPanelExtraction()

      },
      (error) => {
        //console.error('error caught in component' + error.error);
        alert(error.error);
      }
    );
  }

  getPanelsOnSocket(panels: any) {
    //console.log('getEmployees called');
    this.panelsArray = [];
    const obj = JSON.parse(panels);
    obj.panels.forEach((element: any) => {
      console.log("element" + element);
      this.panelsArray.push(
        new InterviewPanel(
          element.panelId,
          element.panelFor,
          element.employee
        )
      );
    });

  }

  getEmployeeImage(e: any) {
    //console.log('getEmployeeImage called' + JSON.stringify(e));
    this.empObj = e;
  }

  resetEmployeeImage() {
    this.empObj = null;
  }

}
