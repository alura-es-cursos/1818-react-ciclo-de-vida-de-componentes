import React, { Component } from "react";
import "./estilo.css";

class RegistroNotas extends Component {
  render() {
    return (
      <form className="registro-nota">
        <input
          type="text"
          placeholder="Titulo"
          className="registro-nota_input"
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
