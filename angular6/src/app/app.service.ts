import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  list:any[] =[]
  list2:any[]=[]
  constructor() { }

  setData(data:any){
    this.list.push(data);


  }

}
