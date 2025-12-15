import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {QuizzComponent} from '../quizz/quizz.component';

@Component({
  selector: 'app-binding-exercices',
  standalone: true,
  imports: [
    FormsModule,
    QuizzComponent
  ],
  templateUrl: './binding-exercices.component.html',
  styleUrl: './binding-exercices.component.scss'
})
export class BindingExercicesComponent {
  prenom: string = "";
  age : number = 0;

  email : string = "";
  email2 : string = "";

  numberA : number = 0;
  numberB : number = 0;
  
  onClick(){
    this.email2 = this.email
  }
}
