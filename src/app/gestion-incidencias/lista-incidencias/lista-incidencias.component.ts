import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseServiceService } from 'src/app/servicios/firebase-service.service';

@Component({
  selector: 'app-lista-incidencias',
  templateUrl: './lista-incidencias.component.html',
  styleUrls: ['./lista-incidencias.component.css']
})

//Vista de las incidencias
export class ListaIncidenciasComponent {

  incidencias: any[] = [];

  constructor(
  
    private incidenciaServ: FirebaseServiceService, 
    private ruta: ActivatedRoute
  ){}
  
  ngOnInit(){

    //Cargamos todos las incidencias y las mostramos una a una en la vista 
    this.incidenciaServ.getAll().subscribe(
      (resp: any) => {
        this.incidencias = [];
        resp.forEach((incidenciaData: any) =>{

          console.log(incidenciaData);
          
          this.incidencias.push({
            id: incidenciaData.payload.doc.id,
            ...incidenciaData.payload.doc.data()
          });
        });
      }
    )
  }

}
