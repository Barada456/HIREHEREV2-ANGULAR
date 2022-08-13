import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Stomp } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { DemandsComponent } from 'src/app/ceo/demands/demands.component';
import { JobDescription } from 'src/app/models/job-description.model';
import { PMService } from 'src/app/services/pm.service';

@Component({
  selector: 'app-demand-resource',
  templateUrl: './demand-resource.component.html',
  styleUrls: ['./demand-resource.component.css'],
})
export class DemandResourceComponent implements OnInit {
  demandResourceForm = new FormGroup({
    qualification: new FormControl(''),
    domain: new FormControl(''),
    skillSets: new FormControl(''),
    experienceInYears: new FormControl(''),
    positionFor: new FormControl(''),
    responsibilites: new FormControl(''),
    remarks: new FormControl(''),
  });

  Qualifications: string[] = ['MCA', 'BTECH', 'BSC'];
  Domain: string[] = ['Java Developer', 'React Developer', 'Python Developer'];

  constructor(private pmService: PMService) {}

  ngOnInit(): void {}

  //This function is used to save the Demand
  onSubmitDemandResource() {
    let data = this.demandResourceForm.value;
    console.log(data);
    this.pmService.onDemandResource(data).subscribe(
      (response) => {
        this.connectDemandsExtraction();
        alert('Demand saved  Suceessfully');
      },
      (error) => {
        console.error('error caught in component' + error.message);
        alert(error.error);
      }
    );
  }

  connectDemandsExtraction() {
    var socket = new SockJS('http://localhost:9090/gs-guide-websocket');
    let stompClient: any;
    stompClient = Stomp.over(socket);

    stompClient.connect({}, (frame: any) => {
      stompClient.send('/app/extractAllDemands');
    });
  }
}
