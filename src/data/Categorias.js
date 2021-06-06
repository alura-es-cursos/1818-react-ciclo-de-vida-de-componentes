export default class Categorias {
  constructor() {
    this.categorias = [];
    this._inscritos = [];
  }

  inscribir(func) {
    this._inscritos.push(func);
  }

  notificar() {
    this._inscritos.forEach((func) => {
      func(this.categorias);
    });
  }

  registrar(nombre) {
    this.categorias.push(nombre);
    this.notificar();
  }
}
