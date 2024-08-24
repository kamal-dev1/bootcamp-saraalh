import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }

  listItems: any[] =[
    {
      name:"name 1"
    },
    {
      name:"name 2"
    },
    {
      name:"name 3"
    },
    {
      name:"name 4"
    },
    {
      name:"name 5"
    },
  ]

  getData():Observable<any>{
    return this.http.get("https://taavonkadehma.ir/back/public/api/v1/location/ostan")
  }
}
