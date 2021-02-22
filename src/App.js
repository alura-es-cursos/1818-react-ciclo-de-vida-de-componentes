import { Component } from "react";
import ListaNotas from "./components/listaNotas/ListaNotas";
import RegistroNotas from "./components/registroNotas/RegistroNotas";
import "./index.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <section className="contenido">
        <RegistroNotas />
        <ListaNotas />
      </section>
    );
  }
}

export default App;
