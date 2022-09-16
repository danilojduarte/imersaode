var carta1 = {
  nome : "Bulbasauro",
  atribultos: {
    ataque: 7,
    defesa: 8,
    magia: 6
  }
};

var carta2 = {
  nome : "Vegeta",
  atribultos: {
    ataque: 10,
    defesa: 6,
    magia: 8
  }
};

var carta3 = {
  nome : "Shiryu de Dragão",
  atribultos: {
    ataque: 9,
    defesa: 5,
    magia: 8
  }
};

var cartas = [carta1, carta2, carta3];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3);
  cartaMaquina = cartas[numeroCartaMaquina];
  console.log(cartaMaquina);
  
  var numeroCartaJogador = parseInt(Math.random() * 3);
  while (numeroCartaMaquina == numeroCartaJogador) {
    var numeroCartaJogador = parseInt(Math.random() * 3);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);
}




// Anotações :
// Como conseguir visualizar um valor especifico
// console.log(carta1.atributos.ataque);