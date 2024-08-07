import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(
    private http:HttpClient
  ) { }

  getData(){
    console.log(this.http.post('https://sarallah-zn.com/back/api/v1/concat/getAllActiveConcat',null));



    }

}
