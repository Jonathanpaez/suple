import { EjemploDialogo } from './modal/modal.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatDialogModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PalabrasComponent } from './palabras/palabras.component';
import {RouterModule} from "@angular/router";
import {RUTAS_APP} from "./app.rutas";

@NgModule({
  declarations: [
    AppComponent,
    EjemploDialogo,
    LoginComponent,
    UsuariosComponent,
    PalabrasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
		FormsModule,
    MatCardModule,
    HttpClientModule,
    MatDialogModule,
    RouterModule.forRoot(

      RUTAS_APP, {useHash: true}

    ),
  ],
  providers: [],
  entryComponents: [EjemploDialogo],
  bootstrap: [AppComponent]
})
export class AppModule { }
