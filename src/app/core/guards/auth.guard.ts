import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {LocalStorageService} from '../services/local-storage.service';

export const authGuard: CanActivateFn = (route, state) => {
  const localStorageService = inject(LocalStorageService)
  const router = inject(Router)

  if (!localStorageService.getLoggedIn() || localStorageService.getAccessToken() === '' ) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};
