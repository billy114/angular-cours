import { Routes } from '@angular/router';
import {DirectivesExercicesComponent} from './pages/directives-exercices/directives-exercices.component';
import {HomeComponent} from './pages/home/home.component';
import {DirectivesComponent} from './directives/directives.component';
import {ServiceComponent} from './pages/service/service.component';
import {ProductsComponent} from './pages/products/products.component';
import {ProductComponent} from './pages/product/product.component';
import {LoginComponent} from './pages/login/login.component';
import {MeComponent} from './pages/me/me.component';

export const routes: Routes = [
  {path : '' , component: HomeComponent},
  {path : 'directive', component : DirectivesComponent},
  {path : 'directive/exercice', component : DirectivesExercicesComponent},
  {path : 'services', component : ServiceComponent},
  {path : 'products', component : ProductsComponent},
  {path : 'products/:id', component : ProductComponent},
  {path : 'login', component : LoginComponent},
  {path : 'me', component : MeComponent},

];
