import { Routes } from '@angular/router';
import {DirectivesExercicesComponent} from './pages/directives-exercices/directives-exercices.component';
import {HomeComponent} from './pages/home/home.component';
import {DirectivesComponent} from './directives/directives.component';
import {ServiceComponent} from './pages/service/service.component';
import {ProductsComponent} from './pages/products/products.component';
import {ProductComponent} from './pages/product/product.component';

export const routes: Routes = [
  {path : '' , component: HomeComponent},
  {path : 'directive', component : DirectivesComponent},
  {path : 'directive/exercice', component : DirectivesExercicesComponent},
  {path : 'services', component : ServiceComponent},
  {path : 'products', component : ProductsComponent},
  {path : 'products/:id', component : ProductComponent},

];
