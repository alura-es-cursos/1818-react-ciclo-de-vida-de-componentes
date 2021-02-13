import { Component } from "react";
import ListaNotas from "./components/listaNotas/ListaNotas";
import RegistroNotas from "./components/RegistroNotas";

import "./index.css";

class App extends Component {
  render() {
    return (
      <section>
        <RegistroNotas />
        <ListaNotas />
      </section>
    );
  }
}

export default App;
