import { Component } from '@angular/core';
import { AutentificacionService } from '../gestion-acceso/servicio/autentificacion.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(
    private autentiServicio: AutentificacionService
  ){}

  
  logout(){
    this.autentiServicio.logout();
  }

}
