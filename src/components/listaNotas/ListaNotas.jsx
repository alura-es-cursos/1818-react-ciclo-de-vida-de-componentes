import React, { Component } from "react";
import DetalleNotas from "../detalleNotas";
import "./estilo.css";

class ListaNotas extends Component {
  constructor() {
    super();
    this.state = { notas: [] };
  }

  componentDidMount() {
    this.props.notas.inscribir(this._nuevasNotas.bind(this));
  }

  _nuevasNotas(notas) {
    this.setState({ ...this.state, notas });
  }

  render() {
    return (
      <ul className="lista-notas">
        {this.state.notas.map((valor, indice) => {
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
