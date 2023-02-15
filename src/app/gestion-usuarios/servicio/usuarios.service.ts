import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AutentificacionService } from '../../gestion-acceso/servicio/autentificacion.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  //Coleeciones de la base de datos
  coleccion = 'usuarios';

  constructor(

    private firebase: AngularFirestore
    ) { }

  //Metodo del servicio para obtener todos los clientes
  getAllUsuarios() : any {
    return this.firebase.collection(this.coleccion).snapshotChanges();
  }

  //Metodo del servicio para obtener un cliente concreto
  getUsuario(id: string): Observable<any>{
    return this.firebase.collection(this.coleccion).doc(id).snapshotChanges();
  }

  //Metodo del servicio para modificar un cliente en concreto
  updateUsuario(id: string, clientes: any): any{
    return this.firebase.collection(this.coleccion).doc(id).update(clientes);
  }

  ////Metodo del servicio para añadir un nuevo cliente
  addUsuario(clientes: any): any{
    return this.firebase.collection(this.coleccion).add(clientes);
  }

  //Metodo del servicio para borrar un cliente en concreto.
  delete(id: string): void{
    this.firebase.collection(this.coleccion).doc(id).delete();
  }
}
