import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular6';
  form:any

  constructor(private fb:FormBuilder,
    private appService:AppService
  ){
    this.form=this.fb.group({
      name:['', Validators.required],
      lastname:['', Validators.required],
      mobile:['', Validators.required]
    })
    this.listData=this.appService.list
    this.listData.forEach(element => {
      this.listData2.push({
        name:"",
        lastname:"",
        mobile:""
      })
  });

    this.appService.sendData({
      "mobile":"09193433401",

    })
  }
  listData:any[]=[]
  listData2:any[]=[]
  submitted:boolean = false
  hasMobileError:boolean = false
  send(index:any){
    this.listData2[index]=this.listData[index]
    this.listData.splice(index,1)
  }
  submite(){
    this.submitted=true
    if (this.form.valid) {
      if (!this.form.get('mobile').value.match(/^(9|09)(10|11|12|13|14|15|16|17|18|19|90|91|92|30|33|01|02|03|04|05|35|36|37|38|39|32|20|21|22)\d{7}$/)) {
        this.hasMobileError=true
      }
      this.appService.setData(this.form.value)
    }





  }
}
