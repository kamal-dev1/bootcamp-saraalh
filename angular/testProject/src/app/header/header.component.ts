import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})


export class HeaderComponent {

  constructor(){
    this.saySalam(15)
  }

 saySalam(bumber:number){
  // for(let index=1; index < bumber; index=index+1){
  //   if (index==2) {
  //     break
  //   }
  //   console.log("salam",index);
  // }

  let listNumber:number[]=[5,1252,36525,5]
  listNumber.forEach((value,key) => {
    if (key!=2) {
      console.log(key," ",value);
    }

  });




 }











}
