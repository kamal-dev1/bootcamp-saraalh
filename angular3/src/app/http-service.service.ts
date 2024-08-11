import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(
    private http:HttpClient
  ) { }

  getData():Observable<any>{
    return this.http.post('https://sarallah-zn.com/back/api/v1/concat/getAllActiveConcat',null);
  }


  getOstan():Observable<any>{
    return this.http.get('https://taavonkadehma.ir/back/public/api/v1/location/ostan')
  }
  getShahrestan(ostanId:string):Observable<any>{
    return this.http.get(`https://taavonkadehma.ir/back/public/api/v1/location/shahrestan/${ostanId}`)
  }
}
