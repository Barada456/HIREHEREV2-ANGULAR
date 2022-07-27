import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Stomp } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { InterviewPanel } from 'src/app/models/interview-panel.model';
import { JobDescription } from 'src/app/models/job-description.model';
import { JobdescriptionService } from 'src/app/services/jobdescription.service';
import { HrServiceService } from '../../services/hr-service.service';

@Component({
  selector: 'app-schedule-interviews',
  templateUrl: './schedule-interviews.component.html',
  styleUrls: ['./schedule-interviews.component.css']
})
export class ScheduleInterviewsComponent implements OnInit {

  panelsArray: InterviewPanel[] = [];

  constructor(private jobdescriptionService : JobdescriptionService,private HrService : HrServiceService) { }

  JDArray : any[] = [];

  selectedResumeFile : any;

  errors : any[ ] = [];

  ngOnInit(): void {
    this.connectPanelExtraction();
    this.connectJdExtraction();
  }

  scheduleInterviewsForm = new FormGroup({
    candidateName : new FormControl(),
    jobDescription : new FormControl(),
    interviewDateAndTime: new FormControl(),
    interviewedBy: new FormControl()
  })

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


  connectJdExtraction()  {
    var socket = new SockJS('http://localhost:9090/gs-guide-websocket');
    let stompClient: any;
    stompClient = Stomp.over(socket);

    stompClient.connect({}, (frame: any) => {
      stompClient.send('/app/extractAllRequirements');
      stompClient.subscribe(
        '/message/allrequirement',
        (details: any) => {
          console.log(JSON.stringify(details));
          this.getJDsOnSocket(details.body);
        }
      );
    });

  }

  getJDsOnSocket(JDs: any) {
    this.JDArray = [];
    const obj = JSON.parse(JDs);
    obj.requirements.forEach((element: any) => {
      console.log("element in JSON" + JSON.stringify(element));
      this.JDArray.push(
        new JobDescription(
         element.qualification ,
         element.domain,
         element.skillSets,
         element.experienceInYears,
         element.positionFor,
         element.responsibilites
        )
      );
    });

  }

  onScheduleInterview(){

    let data = this.scheduleInterviewsForm.value;


    this.HrService.onScheduleInterview(
      this.selectedResumeFile,
      data
    ).subscribe(
      (response) => {
        alert(response);
        this.scheduleInterviewsForm.reset();
        //this.selectedResumeFile= undefined;
        //this.connectEmployeeExtraction()
      },
      (error) => {
        console.log(error.error);

        this.errors=JSON.parse(error.error);
        console.log("errors array"+this.errors);

        //alert(error.error);
      }
    );
  }

  onCandidateResumeUpload(event: any) {
    //Select File
    this.selectedResumeFile = event.target.files[0];
  }

}
