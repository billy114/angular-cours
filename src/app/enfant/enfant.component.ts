import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-enfant',
  standalone: true,
  imports: [],
  templateUrl: './enfant.component.html',
  styleUrl: './enfant.component.scss'
})
export class EnfantComponent {
  @Output() eventEmitter = new EventEmitter();

  onClick(){
    const data = {
      message : "ce message vient de l'enfant"
    }
    this.eventEmitter.emit(data);
  }

}
