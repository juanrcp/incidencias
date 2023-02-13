import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Usuario } from 'src/app/interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {

  //Este Auth es de Firebase
  constructor(private auth: Auth) { 

  }

  //Creamos el login
  login({ correo, clave }: Usuario) {
    return signInWithEmailAndPassword(this.auth, correo, clave);
  }

  //Metodo para registrar un nuevo usuario
  register({ correo, clave }: Usuario) {
    return createUserWithEmailAndPassword(this.auth, correo, clave);
  }

  //Metodo para salir 
  logout() {
    return signOut(this.auth);
  }
}
