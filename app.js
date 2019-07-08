// let mensaje = "hola";
//
// if( true ) {
//
//   let mensaje = "adios";
//
// }
//
// console.log( mensaje );
// const OPCIONES = "todas";
//
//
// if( true ) {
//   const OPCIONES = "ninguna";
// }
// let nombre:string = "Peter";
// let numero:number = 124;
// let booleano:boolean = true;
//
// let hoy = new Date();
//
// hoy = new Date('2020-10-21');
//
// let cualquiera:any;
//
// let spiderman = {
//   nombre: "Mireia",
//   edad: 20
// }
// let nombre:string = "Mireia"
// let apellido:string = "Perez"
// let edad:number = 25;
//
// let texto = `Hola, ${nombre} ${apellido} (${edad})`;
//
// let texto2:string = ``
//
// console.log(texto);
function activar(quien, objeto, momento) {
    if (objeto === void 0) { objeto = "ventilador"; }
    var mensaje;
    if (momento) {
        mensaje = quien + " activ\u00F3 el " + objeto + " en la " + momento;
    }
    else {
        mensaje = quien + " activ\u00F3 el " + objeto;
    }
    console.log(mensaje);
}
activar("Mireia", "Ventilador", "tarde");
