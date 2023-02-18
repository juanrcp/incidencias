import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import { Usuario } from 'src/app/interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {
  
  //Este Auth es de Firebase
  constructor(private auth: AngularFireAuth) { 

  }

  isAuthenticated() {
    return this.auth.authState;
  }

  //Creamos el login
  login({ correo, clave }: Usuario) {
    return this.auth.signInWithEmailAndPassword(correo, clave);
  }

  //Metodo para registrar un nuevo usuario
  register({ correo, clave }: Usuario) {
    return this.auth.createUserWithEmailAndPassword(correo, clave);
  }

  //Metodo para salir 
  logout() {
    return this.auth.signOut();
  }

}
