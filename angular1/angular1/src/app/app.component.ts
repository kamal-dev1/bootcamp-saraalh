import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title:string = 'هیئت ثارالله ' ;


  changeTitle(title:string){

    console.log("1",title);
    console.log("2",this.title);

    this.title=title + "سلام"
    console.log("3",title);
    console.log("4",this.title);
    return title
  }



}
