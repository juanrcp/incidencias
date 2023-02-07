import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FirebaseServiceService } from '../../servicios/firebase-service.service';
import { Location } from '@angular/common';
import { estadosIncidencia } from '../../interfaces/incidencia';

@Component({
  selector: 'app-edit-componente',
  templateUrl: './edit-componente.component.html',
  styleUrls: ['./edit-componente.component.css']
})
export class EditComponenteComponent {

  //Variables necesarias
  incidencia?: any;
  nuevaIncidencia: boolean = false;
  estadosIncidencia: string[] = [];
  id: string;
 
  //Perfil del formulario
  perfileForm = this.fb.group({
    
    autor: [''],
    fecha: [''],
    lugar: [''],
    descripcion: [''],
    reparacion: [''],
    estado: [''],
    revisado: false
  });

  constructor(
    private route: ActivatedRoute, 
    private fb: FormBuilder, 
    private incidenciaSevicio: FirebaseServiceService,
    private location: Location

  ) { }

  ngOnInit() {

    this.estadosIncidencia = estadosIncidencia;

    //Si la url nos devuelve un identificador rellenamos el fromulario con sus valores y podremos editarlo
    //y si no creamos un cliente nuevo
    if(this.route.snapshot.paramMap.get('id')){

      this.nuevaIncidencia = false;
      this.id = String(this.route.snapshot.paramMap.get('id'));
      console.log(this.id);

      this.incidenciaSevicio.getIncidencia(this.id).subscribe((resp: any) => {
        console.log(resp.payload.data());
        this.perfileForm.setValue({...resp.payload.data()});
        this.incidencia = {...resp.payload.data()};
      });

    }else{
      this.nuevaIncidencia = true;
    }
  }

  //Metodo para guardar a las incidencias
  guardar(): void {

    //Si la incidenca es nueva la creo
    if(this.nuevaIncidencia){
      console.log(this.perfileForm.value);
      this.incidenciaSevicio.addIncidencia(this.perfileForm.value).then(
        () => {
          alert("Nueva Incidencia Creada.");
          console.log("Nueva Incidencia Creada.");
        }, (error: any) => {
          console.log(error);
        }
      );

    }else{

      //Si la incidencia no es nueva obtengo el identificador y la modifico
      let id = String(this.route.snapshot.paramMap.get('id'));
      console.warn(this.perfileForm.value);

      this.incidenciaSevicio.updateIncidencia(id, this.perfileForm.value).then(
        () => {
          alert("Incidencia Modificada");
          console.log("Incidencia Modificada.");
        }, (error: any) => {
          console.log(error);
        }
      )
    }
  }

  //Metodo para borrar incidencia.
  borrar(id: string): void{

    this.incidenciaSevicio.delete(id);
    alert("Incidencia Borrada");
    console.log("Incidencia Borrada");
    this.volver();
  }

  //Metodo para volver al sitio anterior.
  volver(): void {
    this.location.back();
  }
}
