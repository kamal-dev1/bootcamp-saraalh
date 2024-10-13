import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Task } from '../@shared/interface/task';
import { CreditionalService } from '../auth/creditional.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient,
    private cred:CreditionalService
  ) {
    this.header=new HttpHeaders({
      'Authorization':`Bearer ${this.cred.credentials?.token}`
    })
  }
  baseUrl=environment.baseUrl
  header:any
  addTask(data:Task):Observable<any>{

    return this.http.post(`${this.baseUrl}/task/addTask`,data,{headers:this.header})
  }
  getListUser():Observable<any>{

    return this.http.get(`${this.baseUrl}/user/getAllUser`,{headers:this.header})
  }
  getMyTask():Observable<any>{

    return this.http.get(`${this.baseUrl}/task/getMyTask`,{headers:this.header})
  }
  done(task_id:number):Observable<any>{

    return this.http.get(`${this.baseUrl}/task/done/${task_id}`,{headers:this.header})
  }
}
