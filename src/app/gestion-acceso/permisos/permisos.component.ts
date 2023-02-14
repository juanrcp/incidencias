import { Component } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AutentificacionService } from '../servicio/autentificacion.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-permisos',
  templateUrl: './permisos.component.html',
  styleUrls: ['./permisos.component.css']
})
export class PermisosComponent implements CanActivate {

  constructor(
    private auth: AutentificacionService,
    private router: Router
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    /*if(this.auth.isAuthenticated()) {
      return true;
    }*/
    this.auth.isAuthenticated().subscribe(
      res => {
        if(res && res.uid) {
          console.log(res.email);
          console.log('Usuario logueado!!');
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

}
