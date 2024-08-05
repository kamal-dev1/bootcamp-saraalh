import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TableComponent } from './table/table.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,TableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
