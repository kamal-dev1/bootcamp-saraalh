import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {
  isMoharam:boolean=false
  maraham:string='red'
  isShena:boolean=false
  listMonth:any[]=[
    {
      name:"moharam",
      color:"red"
    },
    {
      name:"safar",
      color:"blue"
    }
  ]



  listClass:any[]=[

    {
      title:"کلاس نقاشی",
      description:"کلاس نقاشی با تدریس استاد مهدی ترابی",
    },
    {
      title:"کلاس هوا فضا",
      description:"کلاس نقاشی با تدریس استاد یوسف اسم خانی",
    },
    {
      title:"کلاس لپه پاککنی",
      description:"کلاس نقاشی با تدریس استاد علیرضا بیگدلی",
    }
  ]
  date=Date.now();
  currentMonth:any

  className:string='کمال'
  addClass(){
    this.listClass.push(
      {

          title:this.className,
          description:"",

      }
    )
  }
  ngOnInit(){

    console.log("mohamad taha");

  }
  ngAfterViewInit(): void {

    console.log(this.currentMonth.color);

    console.log("mobin");
  }

  constructor(){
    this.currentMonth=this.listMonth[0]
    console.log("kamal");
  }

  saySalam(){
    console.log("salam");

  }

  title = 'angular2';

}
