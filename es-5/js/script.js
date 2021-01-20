const students = ['Paolo', 'Giulia', 'Marco', 'Fulvio', 'Gino'];
alert(students);
const minimo = parseInt(prompt("da che nome della lista vuoi partire? (da 1 a 5)"));
const massimo = parseInt(prompt("con quale nome della lista vuoi finire? (da 1 a 5)"));


const alFiltrati = students.filter((element, i) => i >= minimo-1 && i <= massimo-1);

console.log(alFiltrati);
