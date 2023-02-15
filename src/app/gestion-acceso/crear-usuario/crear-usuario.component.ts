import { Component } from '@angular/core';
import { AutentificacionService } from '../servicio/autentificacion.service';
import { Router } from '@angular/router';
import { Usuario } from '../../interfaces/usuario';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../../gestion-usuarios/servicio/usuarios.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public autenServicio : AutentificacionService,
    private readonly router: Router, 
    public registraUsuario: UsuariosService
  ) {}
  ngOnInit(): void {
    //Formulario del Login
    this.form = this.fb.group({
      correo: ['', [Validators.required]],
      clave: ['', Validators.required], 
      rol: ['Pendiente de Asignar']
    });
  }

  get correo() {
    return this.form.get('correo');
  }

  get clave() {
    return this.form.get('clave');
  }

  register(data: Usuario) {
    this.autenServicio.register(data)
      .then(() => this.router.navigate(['/login']))
      .catch((e) => console.log(e.message));

      //Esto nos crea el metodo en la base de datos con un rol.
      this.registraUsuario.addUsuario(data);

  }

  onSubmit(){
    this.register(this.form.value);
  }

}
