import { Component, OnInit } from '@angular/core';
import { Interview } from 'src/app/models/interview.model';
import { HrServiceService } from 'src/app/services/hr-service.service';

@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.css']
})
export class InterviewsComponent implements OnInit {

  constructor(private hrService: HrServiceService) { }

  ngOnInit(): void {
  }

  interviewObj!: Interview;

  interviewArray: Interview[] = [];

  //To Fetch all interview
  getInterviews() {

    console.log("Get Interviews Called")

    this.hrService.fetchInterviews().subscribe(data => {

      console.log(data);

      data.forEach((interviewDetail: any) => {

        console.log("interviewDetail" + JSON.stringify(interviewDetail));

        this.interviewObj = new Interview(interviewDetail.interviewId, interviewDetail.interviewedBy, interviewDetail.candidateName, interviewDetail.interviewDateAndTime, interviewDetail.isSelected, interviewDetail.remarks);

        this.interviewArray.push(this.interviewObj);
      });
    })

  }




}
