var palla = {
  'nome' : "palla",
  'peso' : 10,
}
console.log(palla);


function cambio() {
  var nuovoPeso = parseInt(prompt("Cambia il peso, inserisci un numero"));
  console.log(nuovoPeso);

  palla.peso = nuovoPeso,
  console.log("Nuovo peso della palla = " + palla.peso);
}

document.getElementById('asd').addEventListener('click', cambio);
