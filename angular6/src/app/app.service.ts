import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  list:any[] =[]
  list2:any[]=[]
  constructor(private http:HttpClient) { }

  setData(data:any){
    this.list.push(data);


  }
  sendData(data:any){
    this.http.post("http://localhost:8000/api/user",data).subscribe({
      next:(data:any)=>{
        console.log(data);

      },error:(error:any)=>{
        console.log(error);

      }
    })


  }

}
