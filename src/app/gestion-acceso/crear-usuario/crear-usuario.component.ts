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
  clavesCorrectas: boolean;

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
      claveC: ['', Validators.required], 
      rol: ['PENDIENTE DE ASIGNAR']
    });
  }

  get correo() {
    return this.form.get('correo');
  }

  get clave() {
    return this.form.get('clave');
  }

  get claveC() {
    return this.form.get('claveC');
  }

  register(data: Usuario) {
    this.autenServicio.register(data)
      .then(() => this.router.navigate(['/login']))
      .catch((e) => console.log(e.message));

      //Esto nos crea el metodo en la base de datos con un rol.
      this.registraUsuario.addUsuario(data);

  }

  compruebaClaves() {
    console.log('Comprobando que las contaseñas sean identicas');
    /*  La idea es leer ambas passwords y ver si son iguales, si no resetearlas y volver a pedirlas */
    const clave = this.form.get('clave')?.value;
    const claveC = this.form.get('claveC')?.value;
    console.log(clave, " - ", claveC);
    if (clave === claveC) {
      console.log('Contraseñas iguales');
      alert('Contraseñas iguales');

      this.clavesCorrectas = true;
    } else {
      console.log('Contraseñas no coinciden');
      alert('Contraseñas no coinciden');
      this.clavesCorrectas = false;
    }
  }

  onSubmit(){
    this.register(this.form.value);
  }

}
