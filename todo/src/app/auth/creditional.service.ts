import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tokenModel } from 'src/app/@shared/interface/auth';

const credentialsKey = 'credentials';
@Injectable({
  providedIn: 'root',
})

export class CreditionalService {
  private _credentials: tokenModel | null = null;
  constructor(private router:Router) {
    let savedCredentials = localStorage.getItem(credentialsKey);
    if (savedCredentials) {
      this._credentials = JSON.parse(savedCredentials);
    }
  }

  isAuthenticated(): boolean {
    return !!this._credentials;
  }

  get credentials(): tokenModel | null {
    return this._credentials;
  }

  setCredentials(credentials?: tokenModel) {
    this._credentials=credentials||null
    if (credentials) {
      localStorage.setItem(credentialsKey, JSON.stringify(credentials));
    } else {
      localStorage.removeItem(credentialsKey);

    }
  }

   logout():Observable<any>{
      this.setCredentials()
      return of(true);
  }
}
