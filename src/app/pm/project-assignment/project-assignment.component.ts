import { Component, OnInit } from '@angular/core';
import { Stomp } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { Employee } from 'src/app/models/employee.model';
import { Project } from 'src/app/models/project.model';
import { PMService } from 'src/app/services/pm.service';

@Component({
  selector: 'app-project-assignment',
  templateUrl: './project-assignment.component.html',
  styleUrls: ['./project-assignment.component.css']
})
export class ProjectAssignmentComponent implements OnInit {

  constructor(private PMService : PMService) { }

  ngOnInit(): void {
    this.connectEmployeeExtraction();
    this.connectAllProjectExtraction();
  }

  employeeArray: Employee[] = [];

  projectArray: Project[] = [];

  projectObj!: Project;

  projectByIdRequestTriggered: any;

  draggedEmployee : any ;

  employeeForProject : any[ ]=[];

  droppedOnProject : any;

  employeeDraaggedImg : any;

  isDropped : boolean = false;

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

  connectAllProjectExtraction() {
    var socket = new SockJS('http://localhost:9090/gs-guide-websocket');
    let stompClient: any;
    stompClient = Stomp.over(socket);


    stompClient.connect({}, (frame: any) => {
      stompClient.send('/app/getAllProject');

      stompClient.subscribe(
        '/message/allProject',
        (details: any) => {
          this.getProjectsOnSocket(details.body);
        }
      );
    });

  }

  connectProjectByIdExtraction(projectId: any) {
    var socket = new SockJS('http://localhost:9090/gs-guide-websocket');
    let stompClient: any;
    stompClient = Stomp.over(socket);


    stompClient.connect({}, (frame: any) => {
      stompClient.send('/app/getProject/' + projectId);

      stompClient.subscribe(
        '/message/projectById',
        (details: any) => {
          this.getProjectByIdOnSocket(details.body);
        }
      );
    });
  }

  getEmployeesOnSocket(employees: any) {
    //console.log('getEmployees called');
    this.employeeArray = [];
    const obj = JSON.parse(employees);
    console.log("employees " + JSON.stringify(obj));
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
          element.available
        )
      );
    });
  }

  getProjectsOnSocket(projects: any) {
    //console.log('getEmployees called');
    this.projectArray = [];
    const obj = JSON.parse(projects);
    console.log("projects " + obj);
    obj.allProjects.forEach((element: any) => {
      //console.log(element);
      this.projectArray.push(
        new Project(
          element.projectId,
          element.projectName,
          element.clientName,
          element.clientLocation,
          element.projectStartDate,
          element.projectEndDate,
          element.projectLogo

        )
      );
    });
  }



  showProjectDetails(projectId: any) {
    console.log('showProjectDetails called');

    this.projectByIdRequestTriggered = true;

    this.connectProjectByIdExtraction(projectId);
    this.connectAllProjectExtraction();
  }



  getProjectByIdOnSocket(project: any) {
    console.log('getProjectByIdOnSocket called');
    this.projectArray = [];
    const obj = JSON.parse(project);
    console.log("project " + obj);


    this.projectObj = new Project(
      obj.project.projectId, obj.project.projectName, obj.project.clientName, obj.project.clientLocation, obj.project.projectStartDate, obj.project.projectEndDate, obj.project.projectLogo
    )

    console.log("Project obj" + JSON.stringify(this.projectObj));
  }

  allowDrop(ev:any) {
    ev.preventDefault();
  }

  drag(employee : any) {
    this.isDropped = false ;
    this.draggedEmployee =employee;
    this.employeeDraaggedImg = employee.empProfileImage;
    console.log("drag called"+this.draggedEmployee);
  }

  drop(ev : any) {
    // ev.preventDefault();
    this.isDropped = true ;
    this.droppedOnProject = ev;
    this.employeeForProject.push(this.draggedEmployee);
    console.log("dropped on project "+this.droppedOnProject);
  }

  assignProject(){
    
    this.PMService.assignProject(this.employeeForProject , this.droppedOnProject).subscribe(
      (response) => {
        alert(response);

      },
      (error) => {
        console.error('error caught in component' + error.message);
      }
    );
  }


}
