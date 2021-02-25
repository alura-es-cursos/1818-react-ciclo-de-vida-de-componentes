import { Component } from "react";
import ListaNotas from "./components/listaNotas";
import RegistroNotas from "./components/registroNotas";
import "./assets/index.css";
import "./assets/App.css";

class App extends Component {

  constructor(){
    super();
    this.notas = [];
  }

  registrar(titulo, nota){
    const objeto = {titulo, nota};
    this.notas.push(objeto);
    console.log(this.notas.length);
  }

  render() {
    return (
      <section className="contenido">
        <RegistroNotas registrar={this.registrar.bind(this)} />
        <ListaNotas notas={this.notas} />
      </section>
    );
  }
}

export default App;
