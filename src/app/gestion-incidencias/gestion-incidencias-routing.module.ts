import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponenteComponent } from './edit-componente/edit-componente.component';
import { CrearIncidenciaComponent } from '../introduccion-incidencias/crear-incidencia/crear-incidencia.component';
import { ListaIncidenciasComponent } from './lista-incidencias/lista-incidencias.component';

const routes: Routes = [
  {path:'', component: ListaIncidenciasComponent}, 
  {path:'crear-incidencia/new', component: CrearIncidenciaComponent},
  {path:'edit-incidencia/:id', component: EditComponenteComponent},
  {path:'**', redirectTo:'/', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionIncidenciasRoutingModule { }
