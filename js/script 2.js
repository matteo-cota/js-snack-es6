// SNACK 2: Gestione elenco studenti
const students = [
    { id: 213, name: "Marco della Rovere", grades: 78 },
    { id: 110, name: "Paola Cortellessa", grades: 96 },
    { id: 250, name: "Andrea Mantegna", grades: 48 },
    { id: 145, name: "Gaia Borromini", grades: 74 },
    { id: 196, name: "Luigi Grimaldello", grades: 68 },
    { id: 102, name: "Piero della Francesca", grades: 50 },
    { id: 120, name: "Francesca da Polenta", grades: 84 }
];

// 1. Lista nomi studenti in maiuscolo
let upperCaseNames = students.map(student => student.name.toUpperCase());
console.log("Nomi studenti in maiuscolo:");
console.log(upperCaseNames);

// 2. Lista studenti con totale voti > 70
let highGradesStudents = students.filter(student => student.grades > 70);
console.log("Studenti con voti superiori a 70:");
console.log(highGradesStudents);

// 3. Lista studenti con totale voti > 70 e id > 120
let specificStudents = students.filter(student => student.grades > 70 && student.id > 120);
console.log("Studenti con voti superiori a 70 e id superiore a 120:");
console.log(specificStudents);
