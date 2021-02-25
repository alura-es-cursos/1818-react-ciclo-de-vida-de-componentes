import { Component } from "react";
import ListaNotas from "./components/listaNotas";
import RegistroNotas from "./components/registroNotas";
import "./assets/index.css";
import "./assets/App.css";

class App extends Component {

  handleRegistrar(titulo, nota){
    console.log("El titulo es " + titulo + " , la nota es " + nota);
  }

  render() {
    return (
      <section className="contenido">
        <RegistroNotas registrar={this.handleRegistrar} />
        <ListaNotas />
      </section>
    );
  }
}

export default App;
