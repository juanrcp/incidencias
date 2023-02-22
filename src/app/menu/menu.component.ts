import { Component } from '@angular/core';
import { AutentificacionService } from '../gestion-acceso/servicio/autentificacion.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(
    //Lo ponemos publico para poder usarlo en todos sitios
    public autentiServicio: AutentificacionService
  ){}

  ngOnInit(): void {

    //Con esto comprobamos e cada momento si el usuario esta o no registrado. 
    this.autentiServicio.isAuthenticated().subscribe(resp => {
      if(resp.uid){
        this.autentiServicio.estaLogueado = true;
      }
      else{
        this.autentiServicio.estaLogueado = false;
      }
    });

  }

  logout(){
    this.autentiServicio.logout();
  }

}
