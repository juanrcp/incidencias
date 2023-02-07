import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaFiltradaComponent } from './lista-filtrada/lista-filtrada.component';

const routes: Routes = [
  {path:'', component: ListaFiltradaComponent}, 
  {path:'**', redirectTo:'/', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RevisionIncidenciasRoutingModule { }
