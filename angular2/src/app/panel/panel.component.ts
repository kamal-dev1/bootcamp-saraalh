import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss'
})
export class PanelComponent {

}
