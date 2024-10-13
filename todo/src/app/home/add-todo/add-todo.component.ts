import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.scss'
})
export class AddTodoComponent {
  constructor(private fb: FormBuilder,
    private homeService: HomeService
  ){
    this.form = this.fb.group({
      title:['',Validators.required],
      description:[''],
      assign_user_id:[''],
    })
    this.getListUser()


  }
  form:any
  error:string=''
  message:string=''
  listUser:any
  getListUser(){
    this.homeService.getListUser().subscribe({
      next:(data)=>{
          this.listUser=data.users
      }
    })
  }
  addTask(){
    this.homeService.addTask(this.form.value).subscribe({
      next:(data)=>{
        this.message=data.message
        this.form.reset();
      },
      error:(data:any)=>{
        this.error = data.error.error;
      }
    })
  }
}
