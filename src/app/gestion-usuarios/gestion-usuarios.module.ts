import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionUsuariosRoutingModule } from './gestion-usuarios-routing.module';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListaUsuariosComponent,
    EditarUsuarioComponent

  ],
  imports: [
    CommonModule,
    GestionUsuariosRoutingModule,
    ReactiveFormsModule
  ]
})
export class GestionUsuariosModule { }
