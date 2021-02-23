import { Component } from "react";
import ListaNotas from "./components/listaNotas";
import RegistroNotas from "./components/registroNotas";
import "./assets/index.css";
import "./assets/App.css";

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
