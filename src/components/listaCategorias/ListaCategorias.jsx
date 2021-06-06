import React, { Component } from "react";
import "./estilo.css";

class ListaCategorias extends Component {

  componentDidMount(){
    this.props.categorias.inscribir(this._nuevasCategorias.bind(this));
  }

  _nuevasCategorias(categorias){
    console.log("Prueba")
    console.log(categorias);
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
          {this.props.categorias.categorias.map((valor, indice) => {
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
