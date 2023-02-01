import { Timestamp } from "firebase/firestore";

//Interfaz de incidencias con los campos para almacenar la informacion
export interface Incidencia {

    incidencia : {
        autor: string;
        fecha: Timestamp,
        lugar: string,
        descripcion: string,
        reaparacion: string
    }
}
