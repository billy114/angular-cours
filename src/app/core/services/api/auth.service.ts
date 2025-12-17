import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LocalStorageService} from '../local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http : HttpClient,
    private localStorageService : LocalStorageService
  ) { }

  login (username: string, password : string) : Observable<any> {
    const url : string = `https://dummyjson.com/auth/login`;
    const body = {
      username : username,
      password : password
    }
    return this.http.post<any>(url,body)
  }

  getMe () : Observable<any> {
    const url : string = `https://dummyjson.com/auth/me`;
    return this.http.get<any>(url)
  }

  getMesAmis ():  Observable<any> {
    const url : string = `https://dummyjson.com/auth/myfrioneds`;
    return this.http.get<any>(url)
  }

}
