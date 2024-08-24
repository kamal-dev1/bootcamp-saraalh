import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }

  baseUrl="https://api.telegram.org/bot7183849379:AAHMVT4ftzmG4GPGWz1LgcKzA_O1_bzNoR0/"
   httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json',
    })
  };
  sendSms(data:any):Observable<any>{

    return this.http.post(`${this.baseUrl}sendMessage`,data,this.httpOptions)
  }
  sendPhoto(data:any):Observable<any>{

    return this.http.post(`${this.baseUrl}sendPhoto`,data,this.httpOptions)
  }
}
