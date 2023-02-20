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
  usuario: Usuario;

  constructor(
    private fb: FormBuilder,
    private autenServicio : AutentificacionService,
    private router: Router, 
    private registraUsuario: UsuariosService
  ) {}
  
  ngOnInit(): void {
    //Formulario del Login
    this.form = this.fb.group({
      correo: ['', Validators.required],
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

  get rol() {
    return this.form.get('rol');
  }


  register(data: Usuario) {

    this.autenServicio.register(data)
      .then(() => this.router.navigate(['/login']))
      .catch((e) => console.log(e.message));

      //Con esto creamos el nuevo usuario que añadiremos a la base de datos y le adjudicamos un rol.
      let usu: Usuario = {
        correo: data.correo,
        clave: data.clave,
        rol: data.rol
      }

      console.log(usu);
      this.registraUsuario.addUsuario(usu).then((error) => console.log(error));
      console.log('Usuario creado en base de datos.');      

  }

  //Metodo para comparar las claves suministradas en el formulario y ver si son identicas
  compruebaClaves() {
    console.log('Comprobando que las contaseñas sean identicas');
    /*  La idea es leer ambas passwords y ver si son iguales, si no resetearlas y volver a pedirlas */
    const clave = this.form.get('clave')?.value;
    const claveC = this.form.get('claveC')?.value;
    console.log(clave, " - ", claveC);
    if (clave === claveC) {
      console.log('Contraseñas iguales');

      this.clavesCorrectas = true;
    } else {
      console.log('Contraseñas no coinciden');
      this.clavesCorrectas = false;
    }
  }

  onSubmit(){
    this.register(this.form.value);

  }
}
