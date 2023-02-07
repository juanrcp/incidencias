import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

//SERVICIO DE FIREBASE CON EL CRUD PARA LAS INCIDENCIAS
@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  coleccion = 'incidencias';

  constructor(
    private firebase: AngularFirestore
  ) { }

  //Metodo del servicio para obtener todas las incidencias
  getAll() : any {
    return this.firebase.collection(this.coleccion).snapshotChanges();
  }

  //Metodo del servicio para obtener una incidencia concreta
  getIncidencia(id: string): Observable<any>{
    return this.firebase.collection(this.coleccion).doc(id).snapshotChanges();
  }

  //Metodo del servicio para modificar una incidencia en concreto
  updateIncidencia(id: string, incidencia: any): any{
    return this.firebase.collection(this.coleccion).doc(id).update(incidencia);
  }

  ////Metodo del servicio para añadir una nueva incidencia
  addIncidencia(incidencia: any): any{
    return this.firebase.collection(this.coleccion).add(incidencia);
  }

  //Metodo del servicio para borrar una incidencia en concreto.
  delete(id: string): void{
    this.firebase.collection(this.coleccion).doc(id).delete();
  }

  //Seleccionar revisados.
  selectRevisados(): any {
    return this.firebase.collection("incidencias", ref => ref.where("revisado", "==", true)).snapshotChanges();
  }

}
