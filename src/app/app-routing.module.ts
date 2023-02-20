import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { PermisosGuard } from './gestion-acceso/permisos/permisos.guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);

//Aqui declaramos las rutas hacia los diferentes modulos.
const routes: Routes = [

  {path: 'gestionAcceso', loadChildren: () => import('./gestion-acceso/gestion-acceso.module').then(a => a.GestionAccesoModule)},
  
  {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},

  {path: 'gestionUsuarios', loadChildren: () => import('./gestion-usuarios/gestion-usuarios.module').then(u => u.GestionUsuariosModule),
    canActivate: [PermisosGuard]
  },

  {path:'introduccionIncidencias', loadChildren: () => import('./introduccion-incidencias/introduccion-incidencias.module').
    then(i => i.IntroduccionIncidenciasModule),
  },

  {path:'gestionIncidencias', loadChildren: () => import('./gestion-incidencias/gestion-incidencias.module').
    then(g => g.GestionIncidenciasModule),
    canActivate: [PermisosGuard]
  },
  {path:'revisionIncidencias', loadChildren: () => import('./revision-incidencias/revision-incidencias.module').
    then(r => r.RevisionIncidenciasModule),
    canActivate: [PermisosGuard]
  },
  {path:'**', redirectTo:'/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
