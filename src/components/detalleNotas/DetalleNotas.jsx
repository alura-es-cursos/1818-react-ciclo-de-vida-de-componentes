import React, { Component } from 'react';
import "./estilo.css";

class DetalleNotas extends Component {
  render() {
    return (
      <section className="detalle-nota">
        <header className="detalle-nota_header">
          <h3 className="detalle-nota_titulo">Titulo</h3>
          <p className="detalle-nota_texto">Registro de nota</p>
        </header>
      </section>
    );
  }
}

export default DetalleNotas;