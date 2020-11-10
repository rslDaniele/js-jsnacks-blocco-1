var squadre = [
  {
    'nome' : "Liverpool",

    'punti' : 0,

    'falliSubiti' : 0,
  },

  {
    'nome' : "Chelsea",

    'punti' : 0,

    'falliSubiti' : 0,
  },

  {
    'nome' : "Arsenal",

    'punti' : 0,

    'falliSubiti' : 0,
  },

  {
    'nome' : "United",

    'punti' : 0,

    'falliSubiti' : 0,
  },

  {
    'nome' : "City",

    'punti' : 0,

    'falliSubiti' : 0,
  },
];
// console.log(squadre);

for (var i = 0; i < squadre.length; i++) {
  squadre[i].punti = Math.floor(Math.random() * 30 + 1);
  squadre[i].falliSubiti = Math.floor(Math.random() * 30 + 1);
}
// console.log(squadre);

squadre.sort(function (a, b) {
  return parseFloat(b.punti) - parseFloat(a.punti)
});
console.log(squadre);
