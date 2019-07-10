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
// function activar( quien:string,
//                   objeto:string = "ventilador",
//                   momento?:string) {
//
//   let mensaje:string;
//
//   if (momento){
//
//     mensaje = `${ quien} activó el ${objeto} en la ${momento}`;
//   }else {
//       mensaje = `${ quien} activó el ${objeto}`;
//   }
//       console.log(mensaje)
//
//   }
//
// activar("Mireia", "Ventilador", "tarde");
// let miFuncion = function( a ){
//   return a;
// }
//
// let miFuncionF =  a => a;
//
//
// let miFuncion2 = function ( a:number, b:number ) {
//   return a + b;
//
// }
//
// let miFuncion2F = ( a:number, b:number )=> a + b;
//
// let miFuncion3 = function( nombre:string ) {
//   nombre = nombre.toUpperCase();
//   return nombre;
// }
//
// let miFuncion3F = (nombre:string)=>{
//   nombre = nombre.toUpperCase();
//   return nombre;
//
// }
//
// console.log( miFuncion ("Normal"));
// console.log( miFuncionF ("Flecha"));
var hulk = {
    nombre: "Hulk",
    smash: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre + " smash!!"); }, 1500);
    }
};
hulk.smash();
