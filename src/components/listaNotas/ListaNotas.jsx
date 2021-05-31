import React, { Component } from "react";
import DetalleNotas from "../detalleNotas";
import "./estilo.css";

class ListaNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.map((valor, indice) => {
          return (
            <li className="lista-notas_item" key={indice}>
              <DetalleNotas
                indice={indice}
                excluir={this.props.excluir}
                titulo={valor.titulo}
                nota={valor.nota}
                categoria={valor.categoria}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaNotas;
