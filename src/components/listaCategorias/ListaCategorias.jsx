import React, { Component } from "react";
import "./estilo.css";

class ListaCategorias extends Component {

  _handleEventoInput(e){
      if (e.key == "Enter"){
          console.log("adiciona categoria");
      }
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          <li className="lista-categorias_item">Categoria 1</li>
          <li className="lista-categorias_item">Categoria 2</li>
          <li className="lista-categorias_item">Categoria 3</li>
          <li className="lista-categorias_item">Categoria 4</li>
        </ul>
        <input onKeyUp={this._handleEventoInput.bind(this)} className="lista-categorias_input" type="text" />
      </section>
    );
  }
}

export default ListaCategorias;
