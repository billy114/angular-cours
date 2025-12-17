import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setAccessToken (token : string) {
    localStorage.setItem('accessToken', token);
  }

  getAccessToken() {
    return localStorage.getItem('accessToken');
  }

  setLoggedIn(status: boolean) {
    localStorage.setItem('loggedIn', status+'');
  }

  getLoggedIn() {
    return  Boolean(localStorage.getItem('loggedIn'));
  }

}
