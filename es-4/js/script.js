var bici = [
  {
    nome : "velox",
    peso : 40
  },
  {
    nome : "super",
    peso : 50
  },
  {
    nome : "fast",
    peso : 30
  }
]

for (var i = 0; i < bici.length; i++) {
  bici[i].peso = numeri(1,3);
}

const [uno, due, tre] = bici;
console.log(uno, due, tre);


if (uno.peso < due.peso && uno.peso < tre.peso) {
  console.log(`
    ${uno.nome} ha il peso minore: ${uno.peso}
    `);
} else if (due.peso < uno.peso && due.peso < tre.peso) {
  console.log(`
    ${due.nome} ha il peso minore: ${due.peso}
    `);
} else {
  console.log(`
    ${tre.nome} ha il peso minore: ${tre.peso}
    `);
}


//FUNZIONI
function numeri(min,max) {
return Math.floor(Math.random() * (max - min + 1) ) + min;
}
