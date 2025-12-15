import { Component } from '@angular/core';
import {NgClass, NgStyle} from '@angular/common';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [
    NgClass,
    NgStyle
  ],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {

  cond : boolean = true;
  auth : string = ''
  isError : boolean = true;
  jours = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi" , "dimanche"]
}
