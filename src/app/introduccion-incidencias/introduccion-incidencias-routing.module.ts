import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaIncidenciasComponent } from './lista-incidencias/lista-incidencias.component';
import { CrearIncidenciaComponent } from './crear-incidencia/crear-incidencia.component';

const routes: Routes = [
  {path:'', component: ListaIncidenciasComponent}, 
  {path:'crear-incidencia', component: CrearIncidenciaComponent},
  {path:'**', redirectTo:'/', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntroduccionIncidenciasRoutingModule { }
