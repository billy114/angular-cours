import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculService {

  serviceValue : number = 0;

  getValue(){
    return this.serviceValue
  }

  setValue(value : number){
    this.serviceValue = value;
  }

  constructor() { }

  increment(value : number) {
    return value + 1;
  }

  showMessage(){
    return "Welcome to the Calcul Service";
  }
}
