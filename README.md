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


