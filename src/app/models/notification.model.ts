export class Notification {
  id : any ;
	triggeredBy : any ;
	receivedBy : any ;
	causedFor : any ;

	notificationDuration : any ;
	isRead : any ;

constructor(id:any ,triggeredBy : any, receivedBy : any, causedFor : any ,notificationDuration : any, isRead : any){
  this.id = id;
  this.triggeredBy = triggeredBy;
  this.receivedBy = receivedBy;
  this.causedFor = causedFor;
  this.notificationDuration = notificationDuration;
  this.isRead = isRead;

}

}
