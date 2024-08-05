import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private appService: AppService){
    this.getDataClass()
    console.log(this.listClass1);
    this.appService.addClass({
      "name":"jsdfhksdjfh"
    })
    console.log(this.listClass1);
  }
  ngOnInit() {

  }
  listClass1:any[]=[]
  name:string=''

  getDataClass(){
    this.listClass1=this.appService.listClass
  }


   searchName(){
    this.getDataClass()

    this.listClass1= this.listClass1.filter(
      element => element.name.includes(this.name))

  }
}
