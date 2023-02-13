import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);

//Aqui declaramos las rutas hacia los diferentes modulos.
const routes: Routes = [

  {path: 'a', loadChildren: () => import('./gestion-acceso/gestion-acceso.module').then(a => a.GestionAccesoModule)},
  
  {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},

  {path:'introduccionIncidencias', loadChildren: () => import('./introduccion-incidencias/introduccion-incidencias.module').
    then(i => i.IntroduccionIncidenciasModule)
  },
  {path:'gestionIncidencias', loadChildren: () => import('./gestion-incidencias/gestion-incidencias.module').
    then(g => g.GestionIncidenciasModule)
  },
  {path:'revisionIncidencias', loadChildren: () => import('./revision-incidencias/revision-incidencias.module').
    then(r => r.RevisionIncidenciasModule)
  },
  {path:'**', redirectTo:'/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
