import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroduccionIncidenciasRoutingModule } from './introduccion-incidencias-routing.module';
import { ListaIncidenciasComponent } from './lista-incidencias/lista-incidencias.component';
import { CrearIncidenciaComponent } from './crear-incidencia/crear-incidencia.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLinkWithHref } from '@angular/router';

@NgModule({
  declarations: [
  
    ListaIncidenciasComponent,
    CrearIncidenciaComponent
  ],
  imports: [
    CommonModule,
    IntroduccionIncidenciasRoutingModule, 
    ReactiveFormsModule,
    RouterLinkWithHref
  ],
  exports: [
    //Exportamos la lista de incidencias para usarla en otro modulo
    ListaIncidenciasComponent
  ]
})
export class IntroduccionIncidenciasModule { }
