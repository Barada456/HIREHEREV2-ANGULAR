import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HrServiceService {




  baseUrl = 'http://localhost:9090'

  onBoardEmployeeURL = this.baseUrl+'/employee/saveemployee';

  scheduleInterviewURL = this.baseUrl+'/hr/createinterview';

  fetchEmployees = this.baseUrl+'/employee/getAllEmployees';
  saveInterviewPanelURL= this.baseUrl+'/hr/interviewPanel';
  fetchInterviewsUrl = this.baseUrl+'/interview/all';

  constructor(private http: HttpClient) { }

  onBoardEmployee(image : File , employee : any) {
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadedEmployeeData = new FormData();
    uploadedEmployeeData.append('file', image);
    uploadedEmployeeData.append('employee', JSON.stringify(employee) );
    return this.http.post(this.onBoardEmployeeURL, uploadedEmployeeData ,{ responseType: 'text' });
  }

  onScheduleInterview(resume : File , interview : any){
    const uploadedECandidateData = new FormData();
    uploadedECandidateData.append('resume', resume);
    uploadedECandidateData.append('interview', JSON.stringify(interview) );
    return this.http.post(this.scheduleInterviewURL, uploadedECandidateData ,{ responseType: 'text' });

  }



  getEmployees() : Observable<any> {
    return this.http.get(this.fetchEmployees);
  }

  savePanel(e: any) {
    console.log(e);
    return this.http.post(this.saveInterviewPanelURL, e, { responseType: 'text' });
  }

  fetchInterviews() : Observable<any>{
    console.log("Fetch interviews called");
    return this.http.get(this.fetchInterviewsUrl);
  }



}
