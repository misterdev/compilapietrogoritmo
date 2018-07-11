class Devid {
  var compilatori: String
  var esami: Esame[]
  try(esame: string) {
    console.log(`Devid prenota ${esame}`)
    console.log(`Devid studia ${esame}`)
    console.log(`Devid prova ${esame}`)
  }
  thanks(nome: String) {
    console.log(`Grazie ${nome}`)
  }
}

class Esame {
  var nome: String
  var voto: any
  
  Esame(nome: String) {
    this.nome = nome
  }
  
  setVoto(voto: any) {
    this.voto = voto
  }
}

while (devid.compilatori != '30L' || devid.esami.length == esami.length -1 ) {
	devid.try('Compilatori')
	devid.thanks('pietro')
}

// TODO testing
// TODO il resto
