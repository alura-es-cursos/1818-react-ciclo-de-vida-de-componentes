import { Component } from "react";
import ListaNotas from "./components/listaNotas";
import RegistroNotas from "./components/registroNotas";
import "./assets/index.css";
import "./assets/App.css";
import ListaCategorias from "./components/listaCategorias";
import ArrayNotas from "./data/ArrayNotas";
import Categorias from "./data/Categorias";

class App extends Component {
  constructor() {
    super();
    this.notas = new ArrayNotas();
    this.categorias = new Categorias();
  }


  render() {
    return (
      <section className="contenido">
        <RegistroNotas
          categorias={this.categorias}
          registrar={this.notas.registrar.bind(this.notas)}
        />
        <section className="bloque-principal">
          <ListaCategorias
            registrarCategoria={this.categorias.registrar.bind(this.categorias)}
            categorias={this.categorias}
          />
          <ListaNotas
            excluir={this.notas.excluir.bind(this.notas)}
            notas={this.notas}
          />
        </section>
      </section>
    );
  }
}

export default App;
