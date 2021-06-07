import React, { Component } from "react";
import "./estilo.css";

class ListaCategorias extends Component {
  constructor() {
    super();
    this.state = { categorias: [] };
    this._nuevasCategorias = this._nuevasCategorias.bind(this);
  }

  componentDidMount() {
    this.props.categorias.inscribir(this._nuevasCategorias);
  }

  componentWillUnmount() {
    this.props.categorias.desuscribir(this._nuevasCategorias);
  }

  _nuevasCategorias(categorias) {
    this.setState({ ...this.state, categorias });
  }

  _handleEventoInput(e) {
    if (e.key == "Enter") {
      let valor = e.target.value;
      this.props.registrarCategoria(valor);
    }
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.state.categorias.map((valor, indice) => {
            return (
              <li className="lista-categorias_item" key={indice}>
                {valor}
              </li>
            );
          })}
        </ul>
        <input
          onKeyUp={this._handleEventoInput.bind(this)}
          className="lista-categorias_input"
          type="text"
        />
      </section>
    );
  }
}

export default ListaCategorias;
