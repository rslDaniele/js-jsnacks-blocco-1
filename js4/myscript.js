var partenza = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

var numeri = [];

while (numeri.lenght < 2) {
  var inputUser = parseInt(prompt("Inserisci un numero tra 0 e 5"));

  if (inputUser < 0) {
    alert("Inserisci un numero tra 0 e 5");
  } else if (inputUser > 5) {
    alert("Inserisci un numero tra 0 e 5");
  } else {
    numeri.push(inputUser);
  }
}


// Stampa primo input user
console.log(numeri[0]);

// stampa secondo input user
console.log(numeri[1]);

// nuovo array
var nuovo = partenza.slice(numeri[0], numeri[1]);
console.log(nuovo);

// nuovo array con il primo valore non incluso
nuovo.splice(0, 1);
console.log(nuovo);
