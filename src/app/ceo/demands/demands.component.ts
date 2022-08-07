import { Component, OnInit } from '@angular/core';
import { Stomp } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { JobDescription } from '../../models/job-description.model';

@Component({
  selector: 'app-demands',
  templateUrl: './demands.component.html',
  styleUrls: ['./demands.component.css']
})
export class DemandsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.connectPanelExtraction();
  }

  demandsArray : any[] = [];

  connectPanelExtraction() {
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
      console.log("element" + element);
      this.demandsArray.push(
        new JobDescription(
         element.jdId,
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

}
