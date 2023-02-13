import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'nuevoUsuario', component: CrearUsuarioComponent},
  {path:'**', redirectTo:'/', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionAccesoRoutingModule { }
