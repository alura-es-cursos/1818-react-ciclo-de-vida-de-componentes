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

  desuscribir(func) {
    this._inscritos = this._inscritos.filter((f) => f !== func);
  }

  registrar(nombre) {
    this.categorias.push(nombre);
    this.notificar();
  }
}
