import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  constructor(private formBuilder: FormBuilder){
        this.createForm()


  }
  list:any[]=["dskfhsdkjfh"]


  form:any
  error:string=""
  submitForm(){
    console.log(this.form?.value);
    if (this.form.invalid) {
      this.error="نام اشتباه است"


    }


  }


  createForm(){
    this.form=this.formBuilder.group({
      name:['',[Validators.required,Validators.minLength(3)]],
      mobile:['']
    })


    //  this.form=new FormGroup({
    //     name: new FormControl('kamal'),
    //     mobile: new FormControl(''),
    //   })
  }
}
