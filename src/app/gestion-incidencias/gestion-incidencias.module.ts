import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionIncidenciasRoutingModule } from './gestion-incidencias-routing.module';
import { IntroduccionIncidenciasModule } from '../introduccion-incidencias/introduccion-incidencias.module';
import { EditComponenteComponent } from './edit-componente/edit-componente.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListaIncidenciasComponent } from './lista-incidencias/lista-incidencias.component';


@NgModule({
  declarations: [
    EditComponenteComponent,
    ListaIncidenciasComponent
  ],
  imports: [
    CommonModule,
    GestionIncidenciasRoutingModule,
    //Importamos modulo para usar sus componentes
    IntroduccionIncidenciasModule,
    ReactiveFormsModule
  ]
})
export class GestionIncidenciasModule { }
