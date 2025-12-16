import { Component } from '@angular/core';
import {EnfantComponent} from '../enfant/enfant.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [
    EnfantComponent
  ],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {

  afficherMessage (data : any){
    alert(data.message)
  }
}
