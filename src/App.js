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
          categorias={this.categorias.categorias}
          registrar={this.notas.registrar}
        />
        <section className="bloque-principal">
          <ListaCategorias
            registrarCategoria={this.categorias.registrar}
            categorias={this.categorias.categorias}
          />
          <ListaNotas
            excluir={this.notas.excluir}
            notas={this.notas.notas}
          />
        </section>
      </section>
    );
  }
}

export default App;
