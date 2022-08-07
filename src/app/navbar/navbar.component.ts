import { Location } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Stomp } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { Notification } from '../models/notification.model';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  notificationsArray: Notification[]= [];

  constructor(private location: Location) {

  }

  routeURL: any;

  socketInitURL : any;
  subscribeURLForNotification :any;

  notificationDuration :any;


  ngOnInit(): void {

    this.routeURL = this.location.path();
    this.createFetchNotificationURl();


    console.log("routeURL " + this.routeURL );
  }

  createFetchNotificationURl(){
    if(this.routeURL.includes("/pm")){
      this.socketInitURL = "/extractAllPMNotifications";
      this.subscribeURLForNotification ="/pm/notifications";
    }
    if(this.routeURL.includes("/hr")){
      this.socketInitURL = "/extractAllHRNotifications";
      this.subscribeURLForNotification ="/hr/notifications";
    }
    if(this.routeURL.includes("/ceo")){
      this.socketInitURL = "/extractAllCEONotifications";
      this.subscribeURLForNotification ="/ceo/notifications";
    }
    this.connectNotificationsExtraction();

  }

  connectNotificationsExtraction() {
    console.log("Connecting notifications");
    let socket = new SockJS('http://localhost:9090/gs-guide-websocket');
    let stompClient: any;
    stompClient = Stomp.over(socket);

    stompClient.connect({}, (frame: any) => {
      console.log("Stompcleint connect frame: " + frame);
      stompClient.send('/app'+this.socketInitURL);
      stompClient.subscribe(
        '/message'+this.subscribeURLForNotification,
        (details: any) => {
          console.log("Details"+details);
          this.getNotificationsOnSocket(details.body);
        }
      );
    });
  }

  getNotificationsOnSocket(notifications: any) {
    console.log('getNotificationsOnSocket called');
     this.notificationsArray = [];
    const obj = JSON.parse(notifications);
    obj.notifications.forEach((element: any) => {
      console.log("element" + JSON.stringify(element) );
      console.log(new Date().getTime());
      console.log(new Date(element.dateTime).getTime());

      this.notificationDuration=this.timeSince(new Date(element.dateTime).getTime());
      
      this.notificationsArray.push(
        new Notification(
          element.id,
          element.triggeredBy,
          element.receivedBy,
          element.causedFor,
          this.notificationDuration,
          element.isRead
        )
      );
    });

  }


   timeSince(date :any) {

    let seconds = Math.floor((new Date().getTime() - date) / 1000);

    let interval = seconds / 31536000;

    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }

}
