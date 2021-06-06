export default class ArrayNotas {
  constructor() {
    this.notas = [];
    this._inscritos = [];
  }

  registrar(titulo, nota, categoria) {
    const objecto = new Nota(titulo, nota, categoria);
    this.notas.push(objecto);
  }

  excluir(indice) {
    this.notas.splice(indice, 1);
  }

  inscribir(func) {
    this._inscritos.push(func);
  }

  notificar() {
    this._inscritos.forEach((func) => {
      func(this.categorias);
    });
  }
}

class Nota {
  constructor(titulo, nota, categoria) {
    this.titulo = titulo;
    this.nota = nota;
    this.categoria = categoria;
  }
}
