import { Component } from '@angular/core';
import { HomeService } from '../home.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-my-taask',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-my-taask.component.html',
  styleUrl: './list-my-taask.component.scss'
})
export class ListMyTaaskComponent {

  constructor(private homeService: HomeService){
    this.getMyTask()
  }
  listMyTask:any=[]
  done(task_id:number){
    this.homeService.done(task_id).subscribe({
      next:(data)=>{
        this.getMyTask()
      }
    })
  }
  edit(){

  }
  getMyTask(){
    this.homeService.getMyTask().subscribe({
      next:(data)=>{
        this.listMyTask = data.tasks;
      }
    })
  }
}
