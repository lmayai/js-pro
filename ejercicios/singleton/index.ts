import Singleton from './Singleton'

const a = Singleton.getInstance();
const b = Singleton.getInstance();

console.log('A es igual a B? :', a === b); 
/* Si esto es true, se verifica que es la misma instancia.
  Se verifica con esto que el patrón singleton solo expone una única instancia de la clase

*/