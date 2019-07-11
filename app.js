// let mensaje = "hola";
//
// if( true ) {
//
//   let mensaje = "adios";
//
// }
//
// console.log( mensaje );
function enviarCuartel(xmen) {
    console.log("Enviando al cuartel " + xmen.nombre);
}
;
function enviarMision(xmen) {
    console.log("Enviando a: " + xmen.nombre);
}
;
var wolverine = {
    nombre: "Wolverine",
    poder: "Regeneración"
};
enviarMision(wolverine);
enviarCuartel(wolverine);
