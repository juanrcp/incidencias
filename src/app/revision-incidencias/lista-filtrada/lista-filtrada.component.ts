import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseServiceService } from 'src/app/servicios/firebase-service.service';

//COMPONENTE CON FILTRADO POR ESTADO
@Component({
  selector: 'app-lista-filtrada',
  templateUrl: './lista-filtrada.component.html',
  styleUrls: ['./lista-filtrada.component.css']
})
export class ListaFiltradaComponent {

  incidencias: any[] = [];

  constructor(
  
    private incidenciaServ: FirebaseServiceService, 
    private ruta: ActivatedRoute
  ){}
  
  ngOnInit(){
    
  }

  //Metodo para mostrar incidencias revisadas
  mostarRevisados(){
    this.incidenciaServ.selectRevisados().subscribe(
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

  //Metodo Para mostrar Todas las Incidencias 
  mostrarTodos(){
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
