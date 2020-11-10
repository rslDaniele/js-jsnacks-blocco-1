var biciclette = [
  {
    'nome' : "nimbus 2000",
    'peso' : 16,
  },

  {
    'nome' : "nimbus 2000",
    'peso' : 12,
  },

  {
    'nome' : "nimbus 2000",
    'peso' : 14,
  },

  {
    'nome' : "nimbus 2000",
    'peso' : 10,
  },

  {
    'nome' : "nimbus 2000",
    'peso' : 10,
  },
];

console.log(biciclette);

var leggera = biciclette[0];
console.log(leggera);

for (var i = 0; i < biciclette.length; i++) {
  if (biciclette[i].peso <= leggera.peso) {
    leggera = biciclette[i];
    console.log("in questo ciclo la più leggera pesa " + leggera.peso);
  }
}

console.log(leggera);
