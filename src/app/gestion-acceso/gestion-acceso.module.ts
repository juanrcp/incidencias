import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionAccesoRoutingModule } from './gestion-acceso-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
//Importaciones necesarias
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';


@NgModule({
  declarations: [
    LoginComponent,
    CrearUsuarioComponent
  ],
  imports: [
    CommonModule,
    GestionAccesoRoutingModule,
    //Importaciones necesarias para la vista, para el <mat-toolbar></mat-toolbar>
    MatToolbarModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class GestionAccesoModule { }
