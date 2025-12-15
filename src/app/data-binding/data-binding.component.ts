import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {

  name : string = "Billel ABBES";
  bootstrapLink = "https://getbootstrap.com/";
  test : string = "valeur"

  getEmail(){
    return "billel.abbes@outllok.fr"
  }

  getImageUrl(){
    return "https://picsum.photos/200/300"
  }

  onClick(){
    alert("clicked");
  }

  onKeyUp(event : any){
    console.log(event.key);
  }
}
