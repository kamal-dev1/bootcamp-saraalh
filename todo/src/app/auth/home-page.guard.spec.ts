import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { homePageGuard } from './home-page.guard';

describe('homePageGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => homePageGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
