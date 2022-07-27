import { Employee } from "./employee.model";

export class InterviewPanel {

   panelId : string;
	 panelFor : string;
	 employee : Employee[];

  constructor(panelId : string, panelFor : string, employee : Employee[]) {
    this.panelId = panelId;
    this.panelFor = panelFor;
    this.employee = employee;
  }

}
