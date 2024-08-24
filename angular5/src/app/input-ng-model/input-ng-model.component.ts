import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-ng-model',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './input-ng-model.component.html',
  styleUrl: './input-ng-model.component.scss'
})
export class InputNgModelComponent {
  constructor( private formBuilder:FormBuilder){
    this.form=this.formBuilder.group({
      "firstname":['', Validators.required] ,
      "lastname":[''] ,
    })

  }
  form:any

  submited:boolean=false
  submit(){
    this.submited = true
    console.log(this.form.value);

  }
  ngOnInit(): void {

    console.log("run ng on init");

  }
  ngAfterViewInit(): void {
    console.log("run ng after view init");

  }




  firstname: string=''

listName:any[]=[
  "mohammad",
  "hasan",
  "kamal",
]



changeFirstname(){
  console.log(this.firstname);

}

}
