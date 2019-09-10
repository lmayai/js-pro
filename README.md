# JS  PROFESIONAL
Resumen completo en: https://augdiaugus.gitbook.io/platzi/escuela-de-javascript/curso-profesional-de-javascript

## ¿Qué significa ser un profesional de JavaScript?
Javascript puro, repasando los fundamentos clave del lenguaje, explorando APIs del DOM, implementando TypeScript y aplicando las mejores prácticas con Patrones de Diseño.

Vamos a necesitar:
- Editor de textos Visual Studio Code.
- Navegador Web Google Chrome.
- Una CLI (terminal de linea de comandos)…

Es recomendable tener conocimientos en:
- HTML
- CSS
- Básicos de Javascript

Objetivos
- Conocimiento profundo del lenguaje, conocer sus particularidades y cómo funciona internamente.
- Conocer los entornos de programación para Javascript.
- Siempre aplicar las mejores prácticas.
- Ser versado en código, leer código de otras personas.
- Tener un set de herramientas que dominas.
- Ética / Profesionalismo
- Experiencia.

## Proyecto
MediaPlayer para Platzi Live con desarollo de plugins.

- Inicio
$ npm init -y
Con el -y se contestan las preguntas en YES

$ npm i -D live-server
i: install
D: Desarrollo

- En el script del package json se agrega
"scripts": {
  "start": "live-server"
}
- Para correrlo
$ npm start

- Mdn HTMLMediaElement

## Script al navegador
El **DOM **es la representación que hace el navegador de un documento HTML.

El navegador interpreta el archivo HTML y cuando termina de transformarlo al DOM se dispara el evento DOMContentLoaded lo que significa que todo el documento está disponible para ser manipulado.

Todo script que carguemos en nuestra página tiene un llamado y una ejecución.

Tanto con async como defer podemos hacer llamados asíncronos pero tiene sus diferencias:

async. Con async podemos hacer la petición de forma asíncrona y no vamos a detener la carga del DOM hasta que se haga la ejecución del código.
defer. La petición es igual asíncrona como en el async pero va a deferir la ejecución del Javascript hasta el final de que se cargue todo el documento.
Hay que tener en cuenta que cuando carga una página y se encuentra un script a ejecutar toda la carga se detiene. Por eso se recomienda agregar tus scripts justo antes de cerrar el body para que todo el documento esté disponible.

## SCOPE
El Scope o ámbito es lo que define el tiempo de vida de una variable, en que partes de nuestro código pueden ser usadas.

Global Scope
Variables disponibles de forma global se usa la palabra var, son accesibles por todos los scripts que se cargan en la página. Aquí hay mucho riesgo de sobreescritura.

Function Scope
Variables declaradas dentro de una función sólo visibles dentro de ella misma (incluyendo los argumentos que se pasan a la función).

Block Scope
Variables definidas dentro de un bloque, por ejemplo variables declaradas dentro un loop while o for. Se usa let y const para declarar este tipo de variables.

Module Scope
Cuando se denota un script de tipo module con el atributo type="module las variables son limitadas al archivo en el que están declaradas.

<script type="module" src="assets/index.js"></script>

## Closures
Son funciones que regresan una función o un objeto con funciones que mantienen las variables que fueron declaras fuera de su scope.

Los closures nos sirven para tener algo parecido a variables privadas, característica que no tiene JavaScript por default. Es decir encapsulan variables que no pueden ser modificadas directamente por otros objetos, sólo por funciones pertenecientes al mismo.

## this
this se refiere a un objeto, ese objeto es el que actualmente está ejecutando un pedazo de código.

No se puede asignar un valor a this directamente y este depende de en que scope nos encontramos:

- Cuando llamamos a this en el Global Scope o Function Scope, se hace referencia al objeto window. A excepción de cuando estamos en strict mode que nos regresará undefined.
- Cuando llamamos a this desde una función que está contenida en un objeto, this se hace referencia a ese objeto. Excepto si la funcion se transifere y es independiente.
- Cuando llamamos a this desde una “clase”, se hace referencia a la *instancia* generada por el constructor.

Nota: aunque no sepuede asignar this directamente, cuando se llama una funcion si se puede asignar el this directamente dentro del llamado

## Los métodos call, apply y bind
Estas funciones nos sirven para establecer el valor de this, es decir cambiar el contexto que se va usar cuando la función sea llamada.

Las funciones call, apply y bind son parte del prototipo Function. Toda función usa este prototipo y por lo tanto tiene estas tres funciones.

- functionName.call(). Ejecuta la función recibiendo como primer argumento el this y los siguientes son los argumentos que recibe la función que llamó a call.
- functionName.apply(). Ejecuta la función recibiendo como primer argumento el this y como segundo un arreglo con los argumentos que recibe la función que llamó a apply.
- functionName.bind(). Recibe como primer y único argumento el this. No ejecuta la función, sólo regresa otra función con el nuevo this integrado.

## Prototype
En Javascript todo son objetos, no tenemos clases, no tenemos ese plano para crear objetos.

Todos los objetos “heredan” de un prototipo que a su vez hereda de otro prototipo y así sucesivamente creando lo que se llama la prototype chain.

La keyword new crea un nuevo objeto que “hereda” todas las propiedades del prototype de otro objeto. No confundir prototype con proto que es sólo una propiedad en cada instancía que apunta al prototipo del que hereda.

## Herencia Prototipal
Por default los objetos en JavaScript tienen cómo prototipo a Object que es el punto de partida de todos los objetos, es el prototipo padre. Object es la raíz de todo, por lo tanto tiene un prototipo padre undefined.

Cuando se llama a una función o variable que no se encuentra en el mismo objeto que la llamó, se busca en toda la prototype chain hasta encontrarla o regresar undefined.

La función hasOwnProperty sirve para verificar si una propiedad es parte del objeto o si viene heredada desde su prototype chain.

## Parsers y el Abstract Syntax Tree
El JS Engine recibe el código fuente y lo procesa de la siguiente manera:

El parser descompone y crea tokens que integran el AST (abstract sintx tree, l cual representa el programa en una estructura).
Se compila a bytecode y se ejecuta.
Lo que se pueda se optimiza a machine code y se reemplaza el código base.
Un SyntaxError es lanzado cuando el motor JavaScript encuentra partes que no forman parte de la sintaxis del lenguaje y esto lo logra gracias a que se tiene un AST generado por el parser.

El parser es del 15% al 20% del proceso de ejecución por lo que hay que usar parser del código justo en el momento que lo necesitamos y no antes de saber si se va a usar o no.

- Que hace el parser? El parser toma el código fuente, luego genera tokens al descomponer el código y los pasa a AST(Abstract syntax tree)
SI lo hace mal es cuando se lanza un syntax error: Este es lanzadocuando el motor de JS se encuentra en partes del código que no forman parte de la sintaxis del lenguaje al momento de analizar el codigo. Ya que el lenguaje es estricto.

El proceso de parsing es importante que se haga bien! 15 a 20% del tiempo de ejecución.
La mayoria del Js en una pagina nunca se ejecuta (debe empaquetarse bien!)
Hace que sea importante bundling y code sppliting

PArser V8 (Motor de chromo y node): 
Eager parsing
- Encuntra errores de sintaxis
- Crea el AST
- Construye scopes

Lazy parsing
- Doble de rapido que el eager parses
- No crea el AST
- Construye los scopes parcialmente

TOKENS DEMO:
Para ver como funciona el TOKENs 

AST DEMO
https://astexplorer.net/
Es un grafo (estructura de datos) qe representa un programa

Se una en:
- Js Engine
- Bundlers: webpack, rollup, parcel
- TRanspiler: babel
- Linters: ESLINT, prettify
- Type checkers: typescript, flow
- Syntax highlighters

## EST explorer
Si se quiere hacer algo como lo que hace ESLINT que resalta errores, esto se puede hacer con AST explorer

- Para el codigo
const pi = 3.1416;

- Si el código solo admite variables en Mayus, y luego reemplaza las minúsculas:
```js
export default function(context) {
  return {
	VariableDeclaration(node){
      if (node.kind === 'const') {
		const declaration = node.declarations[0];
        //Se asegura que el valor es un npumero
        if (typeof declaration.init.value === 'number') {
          if ( declaration.id.name !== declaration.id.name.toUpperCase()){
          	context.report({
              node: declaration.id,
              message: 'El nombre de la constante debe de estar en mayúsculas',
              fix: function(fixer) {
            	  return fixer.replaceText(declaration.id, declaration.id.name.toUpperCase())	
              }
            })
          }
        }
      }
    }
  };
};
```

- La salida será:
```js
// El nombre de la constante debe de estar en mayúsculas (at 1:7)
   const pi = 3.1416;
// ------^

// Fixed output follows:
// --------------------------------------------------------------------------------
const PI = 3.1416;
```

## Que hace el JS engine
- Recibe el cod. fuente.
- Parsea el cod y produce el ATS
- Se compila el bytecode y se ejecuta
- Se optimiza a machine code y se reemplaza el código base

Mientras el cod se ejecuta hay un observador tomando notas. Luego de tener notas es capaz de tomar conclusiones y optimizar.

Bytecode vs Machine code
Butecode se parece a assembly, es portatil, y lo ejecuta una virtual machine.
Machine es binerios, tiene instrucciones especificas a una arquitectura o procesador. Es el unico leido por estos.

Siempre se pasa a machine code.

Its a hot function luego que un codigo siemopre se ejecuta y puede optimizare a machine code, luego de que estaba en un bytecode

, Es posible luego hacer que la ehecucion se de optimice, por tal es bueno que a llamados de funciones siempre se les pase los mismos tipos de objetos

-  Cada brwser tiene una implementacion
Firefox:  Usa spiderMonkey tiene 2 capas de optimizacion
Edge: Chakra tambipen
Safari: JavaScriptCore: Tiene 3 capsa de optimizacion -> Costo beneficio: Tarda mas en comenzar, peoro luego que se arranque ejecua mas rapidamente.

Todos funcionas diferentes, todos los motores.

## Event loop
Hace parecer JS multihilo, ero en realidad es de un solo hilo.
Usa el Stack y el memory Heap 

Stak: en la pila se van poniendo tareas al hacersele un push, poniendole tareas. Se le hacen pop 
Aqui estan las funcones normalmente y se almmacena el scope. 

Para tareas sincronas siempre se ejecuta en un orden , donde sincronamente se hacen push al stack y pop.
Cuando es asincrono se van ingresando al stack cuando le toque

En el stack lo primero que entra es lo ultimo que sale.

Para entender el asincronismo se tiene queue(colas) Donde lo primero que entra es lo primero que sale. Es como hacer una fila, el primero que llega es el que atienden

Cuando es asincronico, se usa la cola de tareas. Pasa de tareas agendadas al task queue, y luego al stack.

Esto lo hace el event-loop, el cual es el programa que revisa si hay tareas pendientes en el queue y lo pasa al stack y tambien revisas si esta vacio el stack.
Si esta vacio pasa del task queue al stack.

Si está ocupado -> espera que se ejecute todo en el stack y louego lo toma del queue al stack. Siemore espera a que este vacio el stack. POrtal el asincronimsm ayuda a la ejecucion de las tareas sin bloquearlo. siempre la idea es que el stack este vacio.

Llegan las promesas: donde se dice que algo eventalemente ocurrirá.
Las promesas van en otra cola. es la microtasks queue

Se agendan primero del microtaks y luego de las schedule

- Para el sgte programa, como es la salida en consola
``` js
function moreAsync() {
  console.log('Start')
  setTimeout( () => console.log('SetTimeout',0))
  Promise.resolve("PR1").then(msg => console.log(msg))
  Promise.resolve("PR2").then(msg => console.log(msg))
  console.log('End')
}
moreAsync()
```

- La salida será:
```
Start
End
PR1
PR2
SetTimeout
```

Las microtareas tienen preferencias.
El event-loop es esa magia que se encarga de hacer parecer que es multihilo, pero en realidad orquesta la ejecucion asincrona de tareas.

Nunca bloquear el event-loop.

## Event Loop
El Event Loop hace que Javascript parezca ser multihilo a pesar de que corre en un solo proceso.

Javascript se organiza usando las siguientes estructuras de datos:

- Stack. Va apilando de forma organizada las diferentes instrucciones que se llaman. Lleva así un rastro de dónde está el programa, en que punto de ejecución nos encontramos.
- Memory Heap. De forma desorganizada se guarda información de las variables y del scope.
Schedule Tasks. Aquí se agregan a la cola, las tareas programadas para su ejecución.
- Task Queue. Aquí se agregan las tares que ya están listas para pasar al stack y ser ejecutadas. El stack debe estar vacío para que esto suceda.
- MicroTask Queue. Aquí se agregan las promesas. Esta Queue es la que tiene mayor prioridad.
- El Event Loop es un loop que está ejecutando todo el tiempo y pasa periódicamente revisando las queues y el stack moviendo tareas entre estas dos estructuras.

## Promesas
Para crear las promesas usamos la clase Promise. El constructor de Promise recibe un sólo argumento, un callback con dos parámetros, resolve y reject. resolve es la función a ejecutar cuando se resuelve y reject cuando se rechaza.

El async/await es sólo syntax sugar de una promesa, por debajo es exactamente lo mismo.

La clase Promise tiene algunos métodos estáticos bastante útiles:

- Promise.all. Da error si una de las promesas es rechazada.
- Promise.race. Regresa sólo la promesa que se resuelva primero.

## Getters y setters
Los getters y setters son funciones que podemos usar en un objeto para tener propiedades virtuales. Se usan los keywords set y get para crear estas propiedades.

Estas propiedades al ser funciones pueden llevar una validación de por medio y ser usadas con el operador de asignación como si fueran una variable más dentro del objeto.

## Proxy
El proxy sirve para interceptar la lectura de propiedades de un objeto (los get, y set) entre muchas otras funciones. Así, antes de que la llamada llegue al objeto podemos manipularla con una lógica que nosotros definamos.

## Generators
Los generadores son funciones especiales, pueden pausar su ejecución y luego volver al punto donde se quedaron recordando su scope.

Algunas de sus características:

- Los generadores regresan una función.
- Empiezan suspendidos y se tiene que llamar next para que ejecuten.
- Regresan un value y un boolean done que define si ya terminaron.
- yield es la instrucción que regresa un valor cada vez que llamamos a next y detiene la ejecución del generador.

## Fetch - Cómo cancelar peticiones
La peticiones AJAX permitieron en su tiempo hacer peticiones asíncronas al servidor sin tener que detener la carga de la página. Hoy en día se utiliza la función fetch para esto.

Con fetch tenemos algo llamado AbortController que nos permite enviar una señal a una petición en plena ejecución para detenerla.

## IntersectionObserver
Sirve para observar elementos y si cruzan un umbral que nosotros definimos nos lo va a notificar para tomar acción.
Con esto se puede saber si el video es visible ono y detenerno y hacer acciones
Viene directamente del DOM. Notifica por medio de umbrales

## VisibilityChange
El visibilityChange forma parte del API del DOM llamado Page Visibility y nos deja saber si el elemento es visible, pude ser usado para ejecutar una acción cuando cambiamos de pestaña. Así podemos ahorrar batería y mejorar la UX.

document.addEventListener("visibilityChange", () => {
  console.log(document.visibilityState)
})

## Service Workers
Sirven para hacer que nuestras aplicaciones funcionen Offline.

Muy usados en las Progressive Web Apps (PWA) los ServiceWorkers son una capa que vive entre el navegador y el Internet.

Parecido a como lo hacen los proxys van a interceptar peticiones para guardar el resultado en cache y la próxima vez que se haga la petición tomar del cache ese resultado.


# TypeSCript

## Introducción
TypeScript es un superset de JavaScript que añade tipos a nuestras variables ayudando así a la detección de errores de forma temprana y mejorando el autocompletado.

Los navegadores no entienden TypeScript así que lo vamos a transpilar a JavaScript usando Parcel.
npm install -D parcel-bundler

npm -rf .\.cache\ .\dist\

### Interfaces
Nos permiten declarar la forma exacta de un objeto, definiendo los tipos de sus propiedades y si son opcionales o no.

### Clases
En las clases en TypeScript sí existen las propiedades privadas.

## Pasar proyecto a TS

# Patrones de diseño:

## Que son:
Son recetas que resuelven problemas en el diseño de SW.
Una solucion a un problema dentro de un cotexto recurrente que pasa muchas veces.

Ejm: Muchos objetos interesados en el estado de otro objeto.
- EJm quienren recibir notificacion cuando cambie el estado.

La solucion debe ser generica.
EJM: cra una clases donde cualquier objeto puede subscribirse y desuscribirse a cambios en el estado.

## EJEMPLOS

### PAtrón SINGLETON: 
Patron que asegura que una clase solo tendrá una instancia. Donde está instancia puede ser consumida por cualquier otro objeto.
UML: 
- Nombre clase:
- privados: instance singleton
- privado: singleton() constructor
- publico: getInstance() revisa si ya existe una instancia, sino la crea

Una analogia: En un pais hay varios partidos, pero solo un gobierno

Mongoose: ORM ayuda a interactuar con una db de mongoDB. Provee una interfaz simple para buscar,e scrbir y validar datos. PAra esta libreria solo se quiere tener una instancia.

## Patron observer
- Con este permite suscribirse o no a servicios y acciones en las cuales uno está pendiente o requiere. 
- Sujetos y observadores.
Sujerto expone el mecanismo de suscripción, donde este expone info a todos los suscriptores(observadores). Luego el observador siempre podrá desuscribirse.

En SW permite crear código desacoplado. 
El observador requiere un metodo update, para poder notificarlos. y como argumento envia la inf.
USADO en newsletter.

- REdux utiliza el patrón observer, la cual maneja un estado. Se tiene un store con un estado y un reducer(reciben acciones que modifican el estado.)
Cuando cambia el estado se notifica a los subscritos

Las acciones se despachan al ejecutarse una acción.

- Event Emitter
emmiter.on .off .emit ->

ECMA Observable
Aun está en STAGE 1 para implementarlo

## DECORATOR (Patrón estructural)
VAs a una tienda a comprar un pc y hay 2 o muchaaas!
De la MAC se implementa cada una, como una clase general y se genera cada una! (hacer cada una sería muchaas)

Class MAC

Class MAc1
Class Mac2
... hasta las necesarias

Si hay cambios toca cambiar uno por uno

"Una entidad de SW (clase, modulo, funcion, etc) debe quedar abierta oara su extensión, pero cerrada para su modificación"
Principio de abierto y cerrado.

DECORATOR: Patron estructural que le añade responsabilidades a un objeto de forma dinámica. No ir a la calsa y cambarlo
Nos permite extender funcionalidad sin tener que usar subclases.

Técnica MonkeyPatching

```js
class Mac{
  constructo() {
    this.memory = 10
  }
  cost() { retunr 100}
}


function withMemory(compu) {
  cost = compu.cost()
  pc.cost = function  () {
    memory = cost + 123123
    return cost + memoryCost
  }
}

const pc = new Mac()
withMemory(pc)
```

Tambien está: clausures, herencia prototipal, middleware. ECAM scrip decorators

EJM Lodash.memoize - trae funcio y regresa una nueva

El decorator extiende la funcionalidad de clases, agregando funcionalidades

Open clase principle, cerrada a modificar pero abuerta a ser extendido.


