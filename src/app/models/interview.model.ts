import { InterviewPanel } from "./interview-panel.model";

export class Interview {
  interviewId: any;

    interviewedBy: InterviewPanel[] = [];

    candidateName: any;

    interviewDateAndTime: any;

    isSelected: any;

    remarks: any;

    resume: any;

    constructor(interviewId: any, interviewedBy: InterviewPanel[], candidateName: any, interviewDateAndTime: any, isSelected: any, remarks: any) {

        this.interviewId = interviewId;

        this.interviewedBy = interviewedBy;

        this.candidateName = candidateName;

        this.interviewDateAndTime = interviewDateAndTime;

        this.isSelected = isSelected;

        this.remarks = remarks;

    }


}
