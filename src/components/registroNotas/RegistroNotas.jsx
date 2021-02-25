import React, { Component } from "react";
import "./estilo.css";

class RegistroNotas extends Component {

  constructor(){
    super();
    this.titulo = "";
  }

  handleTitulo(evento) {
    this.titulo = evento.target.value;
    console.log(this.titulo);
  }

  render() {
    return (
      <form className="registro-nota">
        <input
          type="text"
          placeholder="Titulo"
          className="registro-nota_input"
          onChange={this.handleTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Registro de nota"
          className="registro-nota_input"
        />
        <button className="registro-nota_input registro-nota_submit">
          Registrar nota
        </button>
      </form>
    );
  }
}

export default RegistroNotas;
