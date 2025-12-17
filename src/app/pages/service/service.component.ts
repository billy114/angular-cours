import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {Comp1Component} from '../../components/comp1/comp1.component';
import {Comp2Component} from '../../components/comp2/comp2.component';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [
    RouterLink,
    Comp1Component,
    Comp2Component
  ],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent {

}
