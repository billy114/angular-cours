import { HttpInterceptorFn } from '@angular/common/http';
import {inject} from '@angular/core';
import {LocalStorageService} from '../services/local-storage.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const localStorageService = inject(LocalStorageService);

  if (localStorageService.getLoggedIn() && localStorageService.getAccessToken() !== '') {
    req = req.clone({
      setHeaders : {
        Authorization: `Bearer ${localStorageService.getAccessToken()}`,
      }
    })
  }
  
  return next(req);
};
