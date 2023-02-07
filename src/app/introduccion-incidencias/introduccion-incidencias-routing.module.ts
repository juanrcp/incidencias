import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearIncidenciaComponent } from './crear-incidencia/crear-incidencia.component';

const routes: Routes = [
  {path:'', component: CrearIncidenciaComponent}, 
  {path:'crear-incidencia/new', component: CrearIncidenciaComponent},
  {path:'**', redirectTo:'/', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntroduccionIncidenciasRoutingModule { }
