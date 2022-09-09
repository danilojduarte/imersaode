var numeroSecreto = parseInt(Math.random() * 11);
function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você Acertou!";
    console.log("Acertou");
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Por favor escolha um número de 0 a 10";
    console.log("Por favor escolha um número de 0 a 10");
  } else {
    elementoResultado.innerHTML = "Você Errou!";
    console.log("Errou");
  }
}
