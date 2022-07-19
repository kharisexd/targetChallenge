function invertePalavra(str) {
  //armazenar a palavra que será invertida
    var armazenarPalavra = "";
  // vasculhar todas letras, começando em -1 (última letra da palavra)
    for (var i = str.length - 1; i >= 0; i--) { 
        armazenarPalavra = armazenarPalavra + str[i];
      //Atribuir a primeira letra vasculhada (última letra da palavra) como primeira letra da nova palavra
    }
    return armazenarPalavra; 
}
//Retornar a string invertida
invertePalavra('desafioTarget');
console.log(invertePalavra('desafioTarget'))