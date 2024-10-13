import { CanActivateFn, Router } from '@angular/router';
import { CreditionalService } from './creditional.service';
import { inject } from '@angular/core';

export const homePageGuard: CanActivateFn = (route, state) => {

  let creditional=inject(CreditionalService);
  let router=inject(Router);

  if (creditional.isAuthenticated()) {
    return true;
  }else{
    router.navigate(['/auth/login']);
    return false;
  }

};
