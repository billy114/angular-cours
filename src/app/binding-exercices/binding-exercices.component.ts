import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-binding-exercices',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './binding-exercices.component.html',
  styleUrl: './binding-exercices.component.scss'
})
export class BindingExercicesComponent {
  prenom: string = "";
  age : number = 0;

  email : string = "";
  email2 : string = "";
  
  onClick(){
    this.email2 = this.email
  }
}
