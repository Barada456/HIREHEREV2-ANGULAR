import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators } from '@angular/forms';
import { Stomp } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { Employee } from 'src/app/models/employee.model';
import { HrServiceService } from 'src/app/services/hr-service.service';

@Component({
  selector: 'app-onboard-employee',
  templateUrl: './onboard-employee.component.html',
  styleUrls: ['./onboard-employee.component.css']
})
export class OnboardEmployeeComponent implements OnInit {

  selectedFile!: File;

  employeeArray: Employee[] = [];

  constructor(private HrService: HrServiceService) { }

  ngOnInit(): void {
    this.connectEmployeeExtraction();
  }

  onboardEmployeeForm = new FormGroup( {
    empName : new FormControl('',[Validators.required]),
    empAddress : new FormControl('',[Validators.required]),
    empMobNo: new FormControl('',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    empEmail: new FormControl('',[Validators.required,Validators.email]),
    empDob: new FormControl('',[Validators.required]),
    empDoj: new FormControl('',[Validators.required]),
    empDesignation: new FormControl('',[Validators.required]),
    reportingTo: new FormControl('',[Validators.required]),
    empDepartment: new FormControl('',[Validators.required])
    }
  )

  get empName() {
    return this.onboardEmployeeForm.get('empName');
  }
  get empAddress() {
    return this.onboardEmployeeForm.get('empAddress');
  }
  get empMobNo() {
    return this.onboardEmployeeForm.get('empMobNo');
  }
  get empEmail() {
    return this.onboardEmployeeForm.get('empEmail');
  }
  get empDob() {
    return  this.onboardEmployeeForm.get('empDob');
  }
  get empDoj() {
    return this.onboardEmployeeForm.get('empDoj');
  }
  get empDesignation() {
    return this.onboardEmployeeForm.get('empDesignation');
  }
  get reportingTo() {
    return this.onboardEmployeeForm.get('reportingTo');
  }
  get empDepartment() {
    return this.onboardEmployeeForm.get('empDepartment');
  }

  //To onboard new employee
  onBoardEmployee(): void {
    let data = this.onboardEmployeeForm.value;
    console.log(data);
    this.HrService.onBoardEmployee(
      this.selectedFile,
      data
    ).subscribe(
      (response) => {
        alert(response);
        this.connectEmployeeExtraction()
      },
      (error) => {
        console.error('error caught in component' + error.message);
        alert(error.error);
      }
    );
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

  onEmployeeImageUpload(event: any) {
    //Select File
    this.selectedFile = event.target.files[0];
  }

}
