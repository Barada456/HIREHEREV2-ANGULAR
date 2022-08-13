import { Component, OnInit } from '@angular/core';
import { Stomp } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { JobDescription } from '../../models/job-description.model';
import { CeoService } from '../../services/ceo.service';

@Component({
  selector: 'app-demands',
  templateUrl: './demands.component.html',
  styleUrls: ['./demands.component.css']
})
export class DemandsComponent implements OnInit {

  constructor(private ceoService : CeoService) { }

  ngOnInit(): void {
    this.connectDemandsExtraction();
  }
  demandsArray : any[] = [];

  connectDemandsExtraction() {
    var socket = new SockJS('http://localhost:9090/gs-guide-websocket');
    let stompClient: any;
    stompClient = Stomp.over(socket);

    stompClient.connect({}, (frame: any) => {
      stompClient.send('/app/extractAllDemands');
      stompClient.subscribe(
        '/message/demands',
        (details: any) => {
          this.getDemandsOnSocket(details.body);
        }
      );
    });
  }

  getDemandsOnSocket(demands: any) {
    //console.log('getEmployees called');
    this.demandsArray = [];
    const obj = JSON.parse(demands);
    obj.demands.forEach((element: any) => {
      console.log("element" + JSON.stringify(element));
      this.demandsArray.push(
        new JobDescription(
         element.jdId,
         element.qualification ,
         element.domain,
         element.skillSets,
         element.experienceInYears,
         element.positionFor,
         element.responsibilites,
         element.isApproved
        )
      );
    });

  }

  approveJD(jdId : any){
    console.log("approve jd in demands page clicked");
    this.ceoService.approveJD(jdId).subscribe((response) => {
      this.connectDemandsExtraction();
      alert('Demand Approved  Suceessfully');
    },
    (error) => {
      console.error('Demand Approving Failed' + error.message);
      alert("Demand Approving Failed");
    });


  }

  rejectJD(jdId : any){
    this.ceoService.rejectJD(jdId).subscribe((response) => {
      this.connectDemandsExtraction();
      alert('Demand Rejected  Suceessfully');
    },
    (error) => {
      console.error('Demand Rejecting Failed' + error.message);
      alert('Demand Rejecting Failed');
    });
  }

}
