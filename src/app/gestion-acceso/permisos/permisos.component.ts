import { Component } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AutentificacionService } from '../servicio/autentificacion.service';
import { Observable } from 'rxjs';
import { UsuariosService } from '../../gestion-usuarios/servicio/usuarios.service';
import { Usuario } from '../../interfaces/usuario';

@Component({
  selector: 'app-permisos',
  templateUrl: './permisos.component.html',
  styleUrls: ['./permisos.component.css']
})
export class PermisosComponent implements CanActivate {

  usuario: Usuario;

  constructor(
    private auth: AutentificacionService,
    private router: Router,
    private usuarioServicio: UsuariosService
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    this.auth.isAuthenticated().subscribe(
      res => {
        if(res && res.uid) {
          console.log(res.email);
          console.log('Usuario logueado!!');

          this.usuarioServicio.getUserCorreo(res.email).subscribe(
            (resp: any)  => {
               this.usuario = resp.payload.data();
               console.log(this.usuario.rol);
               this.eresAdministrador(this.usuario.rol);
              
            }
          )
          //this.router.navigate(['/administracion']);
          return true;
        } else {
          console.log('Usuario no logueado!');
          this.router.navigate(['/gestionAcceso/login']);
          return false;
        }
      }
    );
    return true;

  }

  eresAdministrador(rol: string): boolean {
    if(rol === "ADMINISTRADOR") {
      console.log('Eres Administrador');
      return true;
    }else if(rol === 'REVISOR'){
      console.log('Eres Revisor.');
      this.router.navigate(['/revisionIncidencias']);
      return false;
    }
    else{
      console.log('No eres administrdor.');
      this.router.navigate(['/gestionIncidencias']);
      return false;
    }
  }

}
