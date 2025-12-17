import { Component } from '@angular/core';
import {CalculService} from '../../core/services/calucl.service';

@Component({
  selector: 'app-comp2',
  standalone: true,
  imports: [],
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.scss'
})
export class Comp2Component {

  constructor(private calculService : CalculService) {
  }
  valueY : number = 0;

  increment() {
    this.valueY = +1;
  }

  onClick( value : string){
    this.calculService.setValue(Number(value))
  }
}
