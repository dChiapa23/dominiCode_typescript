// Typescript es una version de JS con tipado Estatico
// Podemos asignarle tipos especificos a cada variable
// Para no cometer errores al cambiar el tipo durante la creacion del proyecto

/* TIPOS DE DATOS

JS:

- strings
- number
- null
- undefined
- boolean
- bigInt
- object
- function
- symbol

TS

- any
- arrays
- tuplas
- enum
- never

*/

let userName: string = 'Diego';
let userAge: number = 30;

console.log(`Hola mundo mi nombre es: ${userName} y  tengo ${userAge} años`);

// ARRAYS
let arrNum: number[] = [1, 2, 3,];
let arrNum2: Array<number> = [1, 2, 3,];
let arrStr: string[] = ['uno', 'dos'];
let arrAny: any[] = ['uno', 2, true];

// TUPLA
let tuplaPlayers: [string, number, boolean] = ['Doncic', 2, true];

// ARRAY DE TUPLAS

let players: [number, string][];

players = [
  [1, 'E. Martinez'],
  [10, 'L. Messi']
];

//  INFERENCIA DE TIPOS
// AL DECLARAR UNA VARIABLE, SI NO LA INICIALIZO, TS LE ASIGNA EL TIPO ANY
// AL DECLARAR UNA VARIABLE, SI NO LE INDICO EL TIPO, PERO LA INICIALIZO, LE ASIGNA EL TIPO DEL VALOR INDICADO.

let miVariable; // tomara el tipo any
let miVariable1: string; // tomara el tipo string
let miVariable2 = 'Hola mundo!'; // tomara el tipo string