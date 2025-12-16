import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-card-project',
  standalone: true,
  imports: [
    NgClass,
    FormsModule
  ],
  templateUrl: './card-project.component.html',
  styleUrl: './card-project.component.scss'
})
export class CardProjectComponent {


  @Input({required : true}) project : any = {}
  @Output() eventEmitter = new EventEmitter();
  selected : boolean = false;

  onChange () {
     this.selected = !this.selected;
     this.eventEmitter.emit(this.selected);
  }

}
