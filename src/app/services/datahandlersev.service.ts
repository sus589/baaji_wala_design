import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatahandlersevService {

  constructor(private http : HttpClient) { }


  apiUrl: string ="https://ag.baajiwala.live/api-v2/validateLogin";
  
  login(payload: any): Observable<any>{
    const headers = new HttpHeaders({
      'content-type':'application/json',
      'accept' : 'application/json'
    })
   return this.http.post<any>(this.apiUrl, payload , {headers});
  }
}
