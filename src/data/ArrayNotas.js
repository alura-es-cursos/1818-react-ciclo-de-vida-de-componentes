export default class ArrayNotas {
  constructor() {
    this.notas = [];
  }

  registrar(titulo, nota, categoria) {
    const objecto = new Nota(titulo, nota, categoria);
    this.notas.push(objecto);
  }

  excluir(indice) {
    this.notas.splice(indice, 1);
  }
}

class Nota {
  constructor(titulo, nota, categoria) {
    this.titulo = titulo;
    this.nota = nota;
    this.categoria = categoria;
  }
}
