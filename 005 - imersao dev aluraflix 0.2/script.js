var rafa = { nome: "Rafa", vitorias: 2, empates: 1, derrotas: 1, pontos: 0 };
var paulo = { nome: "Paulo", vitorias: 1, empates: 1, derrotas: 2, pontos: 0 };

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

rafa.pontos = calculaPontos(rafa);
paulo.pontos = calculaPontos(paulo);

var jogadores = [rafa, paulo];

console.log(jogadores);

function exibeJogadoresNaTela(jogadores) {
  var elemento = ""
  elemento += "<tr><td>Paulo</td>"
        <td>2</td>
        <td>5</td>
        <td>1</td>
        <td>24</td>
        <td><button onClick="adicionarVitoria()">Vitória</button></td>
        <td><button onClick="adicionarEmpate()">Empate</button></td>
        <td><button onClick="adicionarDerrota()">Derrota</button></td>
      </tr> 
}




// console.log(rafa);
// console.log(paulo);