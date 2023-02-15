import { Component } from '@angular/core';
import { UsuariosService } from '../servicio/usuarios.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent {

  //Variables necesarias
  usuarios: any[] = [];

  constructor(

    private usuariosService: UsuariosService,
    private ruta: ActivatedRoute
  ) { }

  ngOnInit(): void {

    //Cargamos todos los usuarios y mostramos uno a uno sus datos en la vista 
    this.usuariosService.getAllUsuarios().subscribe(
      (resp: any) => {
        this.usuarios = [];
        resp.forEach((usuariosData: any) =>{
          console.log(usuariosData);
          this.usuarios.push({
            id: usuariosData.payload.doc.id,
            ...usuariosData.payload.doc.data()
          });
        });
      }
    )
  }

  //Metodo para borrar
  borrar(id: string): void{

    this.usuariosService.delete(id);
    alert("Usuario Borrado");
    console.log("Usuario Borrado");
  }

}
