import { Component } from '@angular/core';
import { AutentificacionService } from '../servicio/autentificacion.service';
import { Router } from '@angular/router';
import { Usuario } from '../../interfaces/usuario';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent {

  constructor(
    private readonly autenServicio: AutentificacionService,
    private readonly router: Router
  ) {}
  ngOnInit(): void {}

  register(data: Usuario) {
    this.autenServicio.register(data)
      .then(() => this.router.navigate(['/login']))
      .catch((e) => console.log(e.message));
  }

}
