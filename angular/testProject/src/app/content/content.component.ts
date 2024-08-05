import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [HeaderComponent,RouterOutlet],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

}
