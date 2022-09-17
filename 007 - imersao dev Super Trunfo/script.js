var carta1 = {
  nome : "Bulbasauro",
  atributos: {
    ataque: 7,
    defesa: 8,
    magia: 6
  }
};

var carta2 = {
  nome : "Vegeta",
  atributos: {
    ataque: 10,
    defesa: 6,
    magia: 8
  }
};

var carta3 = {
  nome : "Shiryu de Dragão",
  atributos: {
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
  
  var numeroCartaJogador = parseInt(Math.random() * 3);
  while (numeroCartaMaquina == numeroCartaJogador) {
    var numeroCartaJogador = parseInt(Math.random() * 3);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);
  
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  
  exibirOpcoes()
}

function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = ""
  
  for  (var atributo in cartaJogador.atributos) {
    opcoesTexto += "<input type='radio' 'name=atributo' 'value='" + atributo + "'>" + atributo;
  }
  opcoes.innerHTML = opcoesTexto
}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementByName = ("atributo");
  for ( var i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked == true) {
      return radioAtributo[i].value
    }
  }
}


// Verificar Motivo do valor ter retornado *undefined* Verificar em atributos

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado()
  console.log(atributoSelecionado)
}




// Anotações :
// Como conseguir visualizar um valor especifico
// console.log(carta1.atributos.ataque);