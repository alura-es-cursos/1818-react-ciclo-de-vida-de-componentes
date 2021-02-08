import { Component } from "react";
import ListaNotas from "./components/ListaNotas";

class App extends Component {
  render() {
    return (
      <section>
        <form>
        <input type="text" placeholder="Titulo" />
        <textarea placeholder="Registro de nota" />
        <button>Registrar nota</button>
      </form>
        <ListaNotas />
      </section>
    );
  }
}

export default App;
