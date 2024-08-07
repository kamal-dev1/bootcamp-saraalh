import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private name:string="jksdfhjksdfh"
   name1:string="salam"


   get name3(){
    return this.name
   }
  constructor() {
    // setInterval(() =>{
    //   this.listClass.push({
    //     "name":"jsdfhksdjfh"
    //   })
    // },1)
   }

   listClass:any[]=[
    {
      name:"kamal"
    },
    {
      name:"mehdi"
    },
    {
      name:"kamran"
    }

  ]


  addClass(data:any){
    this.listClass.push(data)
  }
}
