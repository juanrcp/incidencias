import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroduccionIncidenciasRoutingModule } from './introduccion-incidencias-routing.module';
import { ListaIncidenciasComponent } from './lista-incidencias/lista-incidencias.component';
import { CrearIncidenciaComponent } from './crear-incidencia/crear-incidencia.component';

@NgModule({
  declarations: [
  
    ListaIncidenciasComponent,
    CrearIncidenciaComponent
  ],
  imports: [
    CommonModule,
    IntroduccionIncidenciasRoutingModule
  ]
})
export class IntroduccionIncidenciasModule { }
