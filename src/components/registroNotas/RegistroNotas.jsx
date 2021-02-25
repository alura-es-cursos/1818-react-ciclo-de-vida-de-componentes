import React, { Component } from "react";
import "./estilo.css";

class RegistroNotas extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.nota = "";
  }

  _handleTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  _handleNota(evento) {
    evento.stopPropagation();
    this.nota = evento.target.value;
  }

  _registrar(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.registrar(this.titulo, this.nota);
  }

  render() {
    return (
      <form
        className="registro-nota"
        onSubmit={this._registrar.bind(this)}
      >
        <input
          type="text"
          placeholder="Titulo"
          className="registro-nota_input"
          onChange={this._handleTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Registro de nota"
          className="registro-nota_input"
          onChange={this._handleNota.bind(this)}
        />
        <button className="registro-nota_input registro-nota_submit">
          Registrar nota
        </button>
      </form>
    );
  }
}

export default RegistroNotas;
