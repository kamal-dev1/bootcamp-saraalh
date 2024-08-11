import { Component } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

import { CommonModule } from '@angular/common';
import { Observable, of,map, filter, Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-http-request',
  standalone: true,
  imports: [CommonModule ],
  providers:[HttpServiceService],
  templateUrl: './http-request.component.html',
  styleUrl: './http-request.component.scss'
})
export class HttpRequestComponent {
  ostans:any[]=[]
  constructor(private httpService: HttpServiceService){
      this.httpService.getOstan().subscribe({
        next:(res)=>{
          this.ostans=res.ostans
        }
      })


    // observable
    // observer =>next,error,complete


    //arrow Function

    // http
    //event
    //repate time


    this.httpService.getData().pipe(
      map((data)=>data.concats.data)
  ).subscribe({
      next:(response)=>{
        this.data=response
      },
      error:(error)=>{
        console.log("KAMAL",error);

      },
      complete:()=>{
        console.log("finish");

      }
    })
    this.data1$.subscribe({
      next:(res)=>{
        this.showData1.push(res)

      },
      error:(err)=>{
        console.error(err);

      },
      complete:()=>{

      },
    })


    this.data2$.pipe(filter((data)=>data%2==0)).subscribe({
      next:(res)=>{
        this.showData2.push(res)

      },
      error:(err)=>{
        console.error(err);

      },
      complete:()=>{

      },
    })

    // this.data1$.next("lksajd")



    this.data3$.subscribe({
      next:(res:any)=>{
      console.log("data3",res);
      },
      error:(err:any)=>{
        console.error(err);

      },
      complete:()=>{

      },
    })
    this.data3$.subscribe({
      next:(res:any)=>{
      console.log("data3",res);
      },
      error:(err:any)=>{
        console.error(err);

      },
      complete:()=>{

      },
    })
    this.data4$.next("2")
    this.data4$.next("3")
    this.data4$.subscribe({
      next:(res:any)=>{
      console.log("data4",res);
      },
      error:(err:any)=>{
        console.error(err);

      },
      complete:()=>{

      },
    })
    this.data4$.next("4")
    this.data4$.next("5")


    // this.data4$.subscribe({
    //   next:(res:any)=>{
    //   console.log("data4",res);
    //   },
    //   error:(err:any)=>{
    //     console.error(err);

    //   },
    //   complete:()=>{

    //   },
    // })



    this.data3$.next("lksajd")
    this.data3$.next("lksajd1111")


  }

  data:any[]=[]

  data1$=new Observable((observer)=>{
    observer.next("kamal")
    observer.next("parvaz")
    observer.next("parvaz")
    observer.next("parvaz")
    observer.next("parvaz")
    observer.next("parvaz")
    observer.next("parvaz")
    // observer.error("sdfjksdfh")
    observer.complete()
    }
  )


  data2$=of(2,3,5,36,6)
  data3$=new Subject()
  data4$=new BehaviorSubject("1")





  shahrestans:any[]=[]
  getShahrestan(event:any){


    this.httpService.getShahrestan(event.target.value).subscribe({
      next:(res)=>{
        this.shahrestans=res.shahrestans
      }
    })
  }

  showData1:any[]=[]
  showData2:any[]=[]


  ngOnDestroy() {
    this.data3$.unsubscribe()

  }
}
