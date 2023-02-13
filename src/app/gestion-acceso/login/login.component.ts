import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutentificacionService } from '../servicio/autentificacion.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Output() formData: EventEmitter<{
    correo: string;
    clave: string;
  }> = new EventEmitter();

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private autenServicio : AutentificacionService,
    private readonly router: Router
    ) {}

  ngOnInit(): void {

    //Formulario del Login
    this.form = this.fb.group({
      correo: ['', [Validators.required]],
      clave: ['', Validators.required],
    });
  }

  get correo() {
    return this.form.get('correo');
  }

  get clave() {
    return this.form.get('clave');
  }

  //Loguing usuario/contraseña
  login(loginData: Usuario) {
    this.autenServicio.login(loginData)
      .then(() => this.router.navigate(['/home']))
      .catch((e) => console.log(e.message));
  }

  onSubmit() {
    this.formData.emit(this.form.value);
  }

}
