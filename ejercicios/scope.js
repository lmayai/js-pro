// SCOPEEEEE

// Global scope
// var msg = 'Hola platzi'; //Es global
// var $ = function (msg) {
//   console.log('MEnsaje:', msg)
// Se reescribio alogo del jquery

//  en window.msg


// Function scope
// function printN() {
//   for (var i = 0; i < 10; i++) {
//     function eventuallyPrint(n) {
//       setTimeout(function () {
//         console.log(n)
//       }, 100);
//     }
//     eventuallyPrint(i)
//   }
// }
// printN();

// Block Scope
function printN() {
  for (let i = 0; i < 10; i++) {
      setTimeout(function () {
        console.log(n)
      }, 100);
    }
  }
// Let opera sobre el block scope, osea sobre la función

// Module Scope
// El scope de la variable está limitado al archivo.

