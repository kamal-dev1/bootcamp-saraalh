import { Component } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-http-request',
  standalone: true,
  imports: [ ],
  providers:[HttpServiceService],
  templateUrl: './http-request.component.html',
  styleUrl: './http-request.component.scss'
})
export class HttpRequestComponent {
  constructor(private httpService: HttpServiceService){
    this.httpService.getData()
  }
}
