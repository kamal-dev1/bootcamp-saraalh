import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  listUser:any[]=[
   {
    name:"amin",
    lastname:"ramazani",
    mobile:"099999999"
   },
   {
    name:"mohmad mahdi",
    lastname:"torabi",
    mobile:"099999999"
   }

  ]

}
