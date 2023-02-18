import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

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

  //Metodo para obtener al usuario segun su correo
  getUserCorreo(mail: string): any {

    return this.firebase.collection(this.coleccion, ref => ref.where('correo', "==", mail).limit(1)).valueChanges();
  }

  //Metodo del servicio para modificar un cliente en concreto
  updateUsuario(id: string, usuario: any): any{
    return this.firebase.collection(this.coleccion).doc(id).update(usuario);
  }

  ////Metodo del servicio para añadir un nuevo cliente
  addUsuario(usuario: any): any{
    return this.firebase.collection(this.coleccion).add(usuario);
  }

  //Metodo del servicio para borrar un cliente en concreto.
  delete(id: string): void{
    this.firebase.collection(this.coleccion).doc(id).delete();
  }
}
