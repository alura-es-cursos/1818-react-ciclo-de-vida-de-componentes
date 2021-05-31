import { Component } from "react";
import ListaNotas from "./components/listaNotas";
import RegistroNotas from "./components/registroNotas";
import "./assets/index.css";
import "./assets/App.css";
import ListaCategorias from "./components/listaCategorias";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: [],
      categorias: [],
    };
  }

  registrar(titulo, nota) {
    const objeto = { titulo, nota };
    const nuevoArray = [...this.state.notas, objeto];
    const state = {
      notas: nuevoArray,
    };
    this.setState(state);
  }

  registrarCategoria(nombre) {
    const nuevoArray = [...this.state.categorias, nombre];
    const state = {
      ...this.state,
      categorias: nuevoArray,
    };
    this.setState(state);
  }

  excluir(indice) {
    const array = this.state.notas;
    array.splice(indice, 1);
    this.setState({ notas: array });
  }

  render() {
    return (
      <section className="contenido">
        <RegistroNotas registrar={this.registrar.bind(this)} />
        <section className="bloque-principal">
          <ListaCategorias
            registrarCategoria={this.registrarCategoria.bind(this)}
            categorias={this.state.categorias}
          />
          <ListaNotas
            excluir={this.excluir.bind(this)}
            notas={this.state.notas}
          />
        </section>
      </section>
    );
  }
}

export default App;
