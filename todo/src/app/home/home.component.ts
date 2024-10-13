import { Component } from '@angular/core';
import { CreditionalService } from '../auth/creditional.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
constructor(private creditional:CreditionalService,
  private router:Router
){



}


}
