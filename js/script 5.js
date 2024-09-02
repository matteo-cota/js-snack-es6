// ES6 Snack 5
//A partire da un array di stringhe, crea un secondo array formattando le....
// ... stringhe del primo array in minuscolo e con l'iniziale maiuscola.

// Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']

const array = ['pippo', 'PLUTO', 'Paperino'];

const formattedArray = array.map(str => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
});

console.log(formattedArray); 