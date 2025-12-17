import { Component } from '@angular/core';
import {CalculService} from '../../core/services/calucl.service';

@Component({
  selector: 'app-comp1',
  standalone: true,
  imports: [],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.scss'
})
export class Comp1Component {

  constructor(public calculService : CalculService) {
  }

  valueX : number = 0;

  increment() {
    this.valueX = this.calculService.increment(this.valueX);
  }
}
