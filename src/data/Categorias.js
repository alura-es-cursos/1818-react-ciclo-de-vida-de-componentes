export default class Categorias {
  constructor() {
    this.categorias = [];
  }

  registrar(nombre) {
    this.categorias.push(nombre);
    console.log(this.categorias);
  }
}
