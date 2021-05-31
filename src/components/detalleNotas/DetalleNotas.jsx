import React, { Component } from "react";
import "./estilo.css";
import {ReactComponent as DeleteSVG} from "../../assets/imagens/delete.svg";

class DetalleNotas extends Component {

  excluir () {
    const indice = this.props.indice;
    this.props.excluir(indice);
  }

  render() {
    return (
      <section className="detalle-nota">
        <header className="detalle-nota_header">
          <h3 className="detalle-nota_titulo">{this.props.titulo}</h3>
          <DeleteSVG onClick={ this.excluir.bind(this)}/>
        </header>
        <p className="detalle-nota_texto">{this.props.nota}</p>
      </section>
    );
  }
}

export default DetalleNotas;
