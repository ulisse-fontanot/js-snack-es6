let parola1 = prompt("inserisci una parola");
let parola2 = prompt("inserisci un'altra parola");

if (parola1.length > parola2.length) {
  console.log(parola1 + " è più lunga");
} else if (parola1.length < parola2.length) {
  console.log(parola2 + " è più lunga");
} else {
  console.log(parola1 + " e " + parola2 + " hanno la stessa lunghezza");
}
