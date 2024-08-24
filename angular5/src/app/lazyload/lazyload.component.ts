import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lazyload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lazyload.component.html',
  styleUrl: './lazyload.component.scss'
})
export class LazyloadComponent {
  constructor(private appService: AppService){
      this.listItems=this.appService.listItems
     this.appService.getData().subscribe({
        next:(data)=>{
          this.listOstan=data.ostans
        },
        error:()=>{

        },
        complete:()=>{}

      })
  }

  listItems:any[] = [];
  listOstan:any[] = [];
}
