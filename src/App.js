import { Component } from "react";
import ListaNotas from "./components/ListaNotas";
import RegistroNotas from "./components/RegistroNotas";

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
