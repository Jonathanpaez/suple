import {Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {PalabrasComponent} from "./palabras/palabras.component";


export const RUTAS_APP: Routes = [
  {
    path: 'home',
    component: LoginComponent,
  },
  {
    path: 'juego',
    component: PalabrasComponent,
  },


  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];
