import { Component } from "react";
import ListaNotas from "./components/listaNotas";
import RegistroNotas from "./components/registroNotas";
import "./assets/index.css";
import "./assets/App.css";

class App extends Component {

  constructor(){
    super();
    this.state = {
      notas: []
    };
  }

  registrar(titulo, nota){
    const objeto = {titulo, nota};
    const nuevoArray = [...this.state.notas, objeto];
    const state = {
      notas: nuevoArray
    }
    this.setState(state);
  }

  excluir(indice) {
    const array = this.state.notas;
    array.splice(indice,1);
    this.setState({notas : array});
  }

  render() {
    return (
      <section className="contenido">
        <RegistroNotas registrar={this.registrar.bind(this)} />
        <ListaNotas excluir={this.excluir.bind(this)} notas={this.state.notas} />
      </section>
    );
  }
}

export default App;
