import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevisionIncidenciasRoutingModule } from './revision-incidencias-routing.module';
import { ListaFiltradaComponent } from './lista-filtrada/lista-filtrada.component';


@NgModule({
  declarations: [
    ListaFiltradaComponent
  ],
  imports: [
    CommonModule,
    RevisionIncidenciasRoutingModule
  ]
})
export class RevisionIncidenciasModule { }
