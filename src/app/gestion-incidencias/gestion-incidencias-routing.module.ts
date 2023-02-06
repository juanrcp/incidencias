import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaIncidenciasComponent } from '../introduccion-incidencias/lista-incidencias/lista-incidencias.component';
import { EditComponenteComponent } from './edit-componente/edit-componente.component';

const routes: Routes = [
  {path:'', component: ListaIncidenciasComponent}, 
  {path:'crear-incidencia/new', component: EditComponenteComponent},
  {path:'edit-incidencia/:id', component: EditComponenteComponent},
  {path:'**', redirectTo:'/', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionIncidenciasRoutingModule { }
