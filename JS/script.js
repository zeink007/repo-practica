/* FORMAS DE CREAR VARIABLES
---- var : Para variables globales (es mala practica y ya no se usa)
---- let : Para variables locales y no constantes.
---- const : Para variables locales y constantes.
*/

let numero1 = 0;
let numero2 = 2;

function sumar(){
   return numero1 + numero2;
}

const resulado = sumar();
console.log(resulado);

// Callback: Es una funcion que se envia por parametro a una funcion/metodo

let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

/*
dias.forEach((item)=>{
    console.log(item);
});
*/

const callback = (item) =>{console.log(item)}   // FUNCION FLECHA --- CUANDO ES MAS DE UNA INSTRUCCION HAY QUE ABRIR LLAVES {}
dias.forEach(callback);

/*
funtion callback(elemento){
    console.log(elemento);
}
*/