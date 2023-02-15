import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../servicio/usuarios.service';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent {

  //Variables necesarias
  usuario?: any;
  nuevoUsuario: boolean = false;
 
  //Perfil del formulario
  perfileForm = this.fb.group({
    
    correo: [''],
    clave: [''],
    rol: ['Pendiente de Asignar']
  });

  constructor(
    private route: ActivatedRoute, 
    private fb: FormBuilder, 
    private usuarioService: UsuariosService,
    private location: Location

  ) { }

  ngOnInit() {

    //Si la url nos devuelve un identificador rellenamos el fromulario con sus valores y podremos editarlo
    //y si no creamos un usuario nuevo
    if(this.route.snapshot.paramMap.get('id')){

      this.nuevoUsuario = false;
      let id = String(this.route.snapshot.paramMap.get('id'));
      console.log(id);

      this.usuarioService.getUsuario(id).subscribe((resp: any) => {
        console.log(resp.payload.data());
        this.perfileForm.setValue({...resp.payload.data()});
      });

    }else{
      this.nuevoUsuario = true;
    }
  }

  //Metodo para guardar a los usuarios
  guardar(): void {

    //Si el usuario es nuevo lo creo
    if(this.nuevoUsuario){
      console.log(this.perfileForm.value);
      this.usuarioService.addUsuario(this.perfileForm.value).then(
        () => {
          alert("Nuevo Usuario Creado.");
          console.log("Nuevo Usuario Creado.");
        }, (error: any) => {
          console.log(error);
        }
      );

    }else{

      //Si el usuario no es nuevo obtengo el identificador y lo modifico
      let id = String(this.route.snapshot.paramMap.get('id'));
      console.warn(this.perfileForm.value);

      this.usuarioService.updateUsuario(id, this.perfileForm.value).then(
        () => {
          alert("Usuario Modificado");
          console.log("Usuario Modificado.");
        }, (error: any) => {
          console.log(error);
        }
      )
    }
  }

  //Metodo para volver al sitio anterior.
  volver(): void {
    this.location.back();
  }

}
