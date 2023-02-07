import { Component } from '@angular/core';
import { FirebaseServiceService } from 'src/app/servicios/firebase-service.service';
import { Incidencia } from '../../interfaces/incidencia';

//COMPONENTE CON FILTRADO POR ESTADO
@Component({
  selector: 'app-lista-filtrada',
  templateUrl: './lista-filtrada.component.html',
  styleUrls: ['./lista-filtrada.component.css']
})

//Modulo para mostrar lista de incidencias filtrda y marcar la incidencia como revisada
export class ListaFiltradaComponent {

  incidencias: any[] = [];
  public incidenciaSelect?: Incidencia;

  constructor(
  
    private incidenciaServ: FirebaseServiceService
  ){}
  
  ngOnInit(){
    
  }

  //Implementacion para mostrar incidencias revisadas
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

  //Implementacion del servicio para extraer a los no vevisados
  mostarNoRevisados(){
    this.incidenciaServ.selectNoRevisados().subscribe(
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

  //Implementacion para mostrar Todas las Incidencias 
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

  //Metodo para marcar una incidencia como revisada
  cambiarEstado(id: string): void{
    
    this.incidenciaServ.getIncidencia(id).subscribe(
      (resp: any) => {
        this.incidenciaSelect = {...resp.payload.data()}
    });
      
      this.incidenciaSelect.revisado = true;
      console.log(this.incidenciaSelect);
    
      this.incidenciaServ.updateIncidencia(id, this.incidenciaSelect);
      alert("Incidencia Revisada.");
      console.log("Incidencia Revisada.");
    
  }

}
