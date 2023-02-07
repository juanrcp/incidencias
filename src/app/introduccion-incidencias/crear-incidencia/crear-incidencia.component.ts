import { Component } from '@angular/core';
import { Incidencia } from '../../interfaces/incidencia';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { FirebaseServiceService } from '../../servicios/firebase-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-crear-incidencia',
  templateUrl: './crear-incidencia.component.html',
  styleUrls: ['./crear-incidencia.component.css']
})
export class CrearIncidenciaComponent {

  //Variables necesarias
  incidencia?: Incidencia;
 
  //Perfil para crear incidencias
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
    private incidenciaServicio: FirebaseServiceService,
    private location: Location

  ) { }

  ngOnInit() {

  }

  //Metodo para guardar una nueva incidencia
  guardar(): void {

    console.log(this.perfileForm.value);
      this.incidenciaServicio.addIncidencia(this.perfileForm.value).then(
        () => {
          alert("Nueva Incidencia Creada.");
          console.log("Nueva Incidencia Creada.");
        }, (error: any) => {
          console.log(error);
        }
      );
  }

  //Metodo para volver al sitio anterior.
  volver(): void {
    this.location.back();
  }

}
