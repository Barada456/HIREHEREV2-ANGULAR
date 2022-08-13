import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CeoService {
  baseUrl = 'http://localhost:9090/ceo';
  approveJDUrl=this.baseUrl+"/set/accept/";
  rejectJDUrl=this.baseUrl+"/set/reject/";

  constructor(private http : HttpClient) { }

  approveJD(jdID:any) : Observable<any> {
    console.log("approve jd in service page clicked");
    return this.http.get(this.approveJDUrl+jdID ,{
      responseType: 'text'
    });
  }

  rejectJD(jdID:any) : Observable<any> {
    return this.http.get(this.rejectJDUrl+jdID,{
      responseType: 'text'
    });
  }
}
