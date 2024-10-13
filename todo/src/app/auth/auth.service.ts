import { Injectable, OnDestroy } from '@angular/core';
import { Observable, BehaviorSubject, of, Subscription } from 'rxjs';
import { map, catchError, switchMap, finalize, tap } from 'rxjs/operators';

import { Router } from '@angular/router';
import { AuthHttpService } from './auth-http.service';
import { CreditionalService } from './creditional.service';
import { LoginData } from 'src/app/@shared/interface/auth';



@Injectable({
  providedIn: 'root',
})
export class AuthService  {

  constructor(
    private authHttpService: AuthHttpService,
    private credentialsService: CreditionalService,

  ) {

  }

  login(context: LoginData): any {
    return this.authHttpService.login(context).pipe(
      tap((auth: any) => {
        this.credentialsService.setCredentials(auth);
        return auth;
      })
    );
  }



  logout(): Observable<boolean> {

    this.credentialsService.setCredentials();

    return of(true);
  }







}
