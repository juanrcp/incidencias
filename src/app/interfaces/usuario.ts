//Establecemos los posibles estados de la incidencia
type TipoRol =  "ADMINISTRADOR" | "REVISOR" | "PENDIENTE DE ASIGNAR";

//Exportamos un array con los diferentes tipos.
export var tiposRoles: string [] = [
    
    "ADMINISTRADOR",
    "REVISOR",
    "PENDIENTE DE ASIGNAR"
];

export interface Usuario {
    //Interfaz de usuario
    correo: string;
    clave: string;
    rol: string;
}
