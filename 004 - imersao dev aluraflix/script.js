
// // Aula de Array
// var listaFilmes = ["Alita", "TopGun 2", "The Matrix"];

// // Comando para adicionar um item a lista

// listaFilmes.push ("The Fast And The Furious 2");
// listaFilmes.push ("The Fast And The Furious 3");
// listaFilmes.push ("The Fast And The Furious 4");
// listaFilmes.push ("The Fast And The Furious 5");

// // var filme1 = "Alita"
// // var filme2 = "TopGun 2"
// // var filme3 = "The Matrix"

// // document.write("<p>" + listaFilmes[0] + "</p>");
// // document.write("<p>" + listaFilmes[1] + "</p>");
// // document.write("<p>" + listaFilmes[2] + "</p>");
// // document.write("<p>" + listaFilmes[3] + "</p>");

// // document.write("<p>" + filme2 + "</p>");
// // document.write("<p>" + filme3 + "</p>");

// // Iniciando metodo FOR para controle da lista

// for ( var indice = 0; indice < listaFilmes.length; indice++ ) {
//     document.write("<p>" + listaFilmes [indice] + "</p>");
// }

var listaFilmes = [
    "https://www.kinoplex.com.br/filmes/images/cartaz/262x388/top-gun-maverick.jpg",
    "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",

    "https://upload.wikimedia.org/wikipedia/pt/f/f9/TheFastandtheFurious.jpg",

    "https://img.elo7.com.br/product/original/25FA5F0/big-poster-filme-alita-anjo-de-combate-lo01-tamanho-90x60-cm-poster.jpg"
  ];
  
  for (var i = 0; i < listaFilmes.length; i++) {
    document.write("<img src=" + listaFilmes[i] + ">");
  }
  