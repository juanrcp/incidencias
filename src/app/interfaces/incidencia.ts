import { Timestamp } from "firebase/firestore";

//Establecemos los posibles estados de la incidencia
type EstadoIncidencia =  "LEIDA" | "ASIGNADA (a un operario)" | "COMENZADA" | "TERMINADA";

//Exportamos un array con los diferentes tipos.
export var estadosIncidencia: string [] = [
    
    "LEIDA", 
    "ASIGNADA (a un operario)", 
    "COMENZADA", 
    "TERMINADA"

];

//Interfaz de incidencias con los campos para almacenar la informacion
export interface Incidencia {

    incidencia : {
        id: string,
        autor: string,
        fecha: Timestamp,
        lugar: string,
        descripcion: string,
        reparacion: string,
        estado: string,
        revisado: boolean
    }
}
