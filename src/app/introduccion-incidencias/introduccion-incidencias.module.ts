import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroduccionIncidenciasRoutingModule } from './introduccion-incidencias-routing.module';
import { CrearIncidenciaComponent } from './crear-incidencia/crear-incidencia.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLinkWithHref } from '@angular/router';

@NgModule({
  declarations: [

    CrearIncidenciaComponent
  ],
  imports: [
    CommonModule,
    IntroduccionIncidenciasRoutingModule, 
    ReactiveFormsModule,
    RouterLinkWithHref
  ],
  exports: [
    //Exportamos el componente para crear incidencias y asi poder usarla en otros modulos
    CrearIncidenciaComponent
  ]
})
export class IntroduccionIncidenciasModule { }
