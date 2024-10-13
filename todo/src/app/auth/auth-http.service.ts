import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { LoginData } from 'src/app/@shared/interface/auth';
import { CreditionalService } from './creditional.service';



@Injectable({
  providedIn: 'root',
})
export class AuthHttpService {

  constructor(private http:HttpClient,private cred:CreditionalService) { }


  login(data:LoginData):Observable<any>{
    return this.http.post('http://localhost:8000/api/v1/user/login',data);
  }
  getUser():Observable<any>{
    let header=new HttpHeaders({
      'Authorization':`Bearer ${this.cred.credentials?.token}`
    })
    return this.http.get('http://localhost:8000/api/v1/user/get',{headers:header})
  }
}
