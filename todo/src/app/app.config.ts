import { APP_INITIALIZER, ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Router } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import { AuthHttpService } from './auth/auth-http.service';
import { CreditionalService } from './auth/creditional.service';
function initializeAppFactory(authHttp: AuthHttpService,creditional:CreditionalService): () => Observable<any> {
  return () => authHttp.getUser()
    .pipe(
      catchError((error:any)=>{
          return creditional.logout()
       })
    );
 }
export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes),
     {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      multi: true,
      deps: [AuthHttpService,CreditionalService],
    },

  ]
};
