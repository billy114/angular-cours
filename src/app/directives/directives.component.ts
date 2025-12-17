import { Component } from '@angular/core';
import {NgClass, NgStyle} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [
    NgClass,
    NgStyle,
    RouterLink
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
