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

//FUNCIONES DE FLECHA

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

//
// let hulk = {
//   nombre: "Hulk",
//   smash(){
//
//     setTimeout( ()=> console.log(this.nombre + " smash!!"),  1500 );
//
//   }
// }
//
// hulk.smash();


//DESTRUCTURACION OBJETOS

// let avenger = {
//   nombre: "Steve",
//   clave: "Capitan America",
//   poder: "Droga"
// }
//
// let { nombre, clave, poder } = avenger;
//
// // let nombre = avenger.nombre;
// // let clave = avenger.clave;
// // let poder = avenger.poder;
//
// console.log(nombre, clave, poder);

//DESTRUCTURACION DE ARRAYS

// let avengers:string[] = ["Thor","Steve","Tony"]
//
// let [ thor, capi, ironman ] = avengers;
//
// console.log(thor, capi, ironman);

//PROMESAS ES6

// let prom1 = new Promise( function( resolve, reject){
//
//   setTimeout( ()=>{
//     console.log("Promesa terminada");
//
//     reject();
//
//   }, 1500 )
// })
//
// prom1.then( function(){
//   console.log("Ejecutame cuando se termine bien!");
//
// },
//   function(){
//     console.error("Ejectuar si todo sale mal");
//   }
//
// )


//INTERFACES TypeScript

interface Xmen {
  nombre:string,
  poder:string,

}

function enviarCuartel(xmen:Xmen){

  console.log("Enviando al cuartel " + xmen.nombre);

};


function enviarMision(xmen:Xmen){

  console.log("Enviando a: " + xmen.nombre);

};

let wolverine:Xmen = {
  nombre: "Wolverine",
  poder: "Regeneración"
};

enviarMision(wolverine);
enviarCuartel(wolverine);
