import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form2',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './form2.component.html',
  styleUrl: './form2.component.scss'
})
export class Form2Component {
constructor( private fb: FormBuilder){
this.createForm()
this.addItem()
}
form:any
name:string=""
createForm(){
  this.form=this.fb.group({
    name:[''],
    items:this.fb.array([])
  })
}
get mobiles():FormArray{
  return this.form.get('items')
}
addItem(){
  if (this.mobiles.length<3) {
    this.mobiles.push(this.fb.group({
      mobile:[''],
      telphone:['']
    }))
  }

  console.log(this.mobiles);


}
removeItem(index:number){
  this.mobiles.removeAt(index)
}

submit(){


console.log(this.form.value);
}
submitForNgmodel(){
  console.log(this.name);
}
}
