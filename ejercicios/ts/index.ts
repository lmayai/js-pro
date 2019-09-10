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









