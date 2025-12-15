import { Component } from '@angular/core';

@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.scss'
})
export class QuizzComponent {

  message: string ="";
  question : string = "On est en quelle année ?";
  goodAnswer : string = "2025";
  disabled : boolean = false;
  answers : string[] = [
    "2011","2022", "2023", "2025"
  ]

  onClick(answer : string) {
    this.disabled = true;
    if (answer == this.goodAnswer) {
      this.message = "bonne réponse"
    }else {
      this.message = "mauvaise réponse"
    }
  }

  reset() {
    this.message = "";
    this.disabled = false;
  }

}
