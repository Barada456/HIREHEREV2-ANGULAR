import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JobDescription } from '../models/job-description.model';

@Injectable({
  providedIn: 'root'
})
export class PMService {


  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:9090/pm';

  assignProjectTOEmpURl = this.baseUrl+'/assignProject/';

  onDemandResourceURL = this.baseUrl + '/demandresource';

  assignProject(employeesToBeAssigned: any, droppedOnProject: any) {
    console.log(employeesToBeAssigned);
    //console.log(listOfEmpNo);
    return this.http.post(this.assignProjectTOEmpURl+droppedOnProject ,employeesToBeAssigned ,{ responseType: 'text' });
  }

  onDemandResource(demand: JobDescription) {
    return this.http.post(this.onDemandResourceURL, demand, {
      responseType: 'text',
    });
  }





}
