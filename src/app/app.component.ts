import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FirstComponentComponent} from './first-component/first-component.component';
import {HeaderComponent} from './header/header.component';
import {MainComponent} from './main/main.component';
import {FooterComponent} from './footer/footer.component';
import {DataBindingComponent} from './data-binding/data-binding.component';
import {BindingExercicesComponent} from './binding-exercices/binding-exercices.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstComponentComponent, HeaderComponent, MainComponent, FooterComponent, DataBindingComponent, BindingExercicesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-cours';
}
