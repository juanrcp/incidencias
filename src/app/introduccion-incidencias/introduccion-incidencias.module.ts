import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroduccionIncidenciasRoutingModule } from './introduccion-incidencias-routing.module';
import { ListaIncidenciasComponent } from './lista-incidencias/lista-incidencias.component';
import { CrearIncidenciaComponent } from './crear-incidencia/crear-incidencia.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  
    ListaIncidenciasComponent,
    CrearIncidenciaComponent
  ],
  imports: [
    CommonModule,
    IntroduccionIncidenciasRoutingModule, 
    ReactiveFormsModule
  ]
})
export class IntroduccionIncidenciasModule { }
