console.log('Hello TS')

function add(a:number, b:number){
  return a+b
}

const suma = add(2,3) 

let muted:boolean = true;
muted = false;
muted = 'callado' //Normalmente en Js no saldría

// Numeros
let age = 6
let numerador:number = 42
let denominador:number = age;
let resultado = numerador / denominador

//String
let nombre:string = 'Richard'
let saludo:string = `Me llamo ${nombre}`

//Arreglos
let people: string[] = [];
people = ['isabel', 'raul']
people.push('100')

let peopleNum: Array<string | number> = []
peopleNum.push('RIch')
peopleNum.push(2)

//Enum
enum Color {
  Rojo = "Rojo",
  Verde = "Verde",
  Azul = "Azul"
} 

let colorFavorito: Color = Color.Azul; 
console.log(`Mi color es ${colorFavorito} aa`)

// Any
let comodin:any = 'joker'
comodin = {
  type: 'wild'
}

//Object
let someO:object = {
  t: 'o'
}

// Funciones - se pone el tipo que regresa
function sum(a:number , b:number):number {
  return a+b
}

sum(3, 5);

function createAdder(a:number ): (number)=>number{
  return function(b:number){
    return b+a
  }
}

const addFour = createAdder(4);
const fourPlus = addFour(6)

//Opcionales params
function fullname(f:string, l?:string): string {
  return `${f} ${l}`
}

//Por omision
function fullname2(f:string, l:string = 'Smith'): string {
  return `${f} ${l}`
}

const ric = fullname('f');


//  INTERFACES
interface Rectangulo {
  ancho:number
  alto: number
  color?: Color
}

let rect: Rectangulo = {
  ancho:4,
  alto:6,
  color: Color.Azul
}

function area(r:Rectangulo){
  return r.alto * r.ancho
}

const areaRect = area(rect);
console.log(areaRect)

rect.toString = function () {
  return this.color ? `Un rectangulo ${this.color}` : 'Un ractangulo'
}

console.log(rect.toString())





