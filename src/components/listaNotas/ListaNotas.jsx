import React, { Component } from "react";
import DetalleNotas from "../detalleNotas/DetalleNotas";
import "./estilo.css";

class ListaNotas extends Component {
  render() {
    return (
      <ul>
        {Array.of("React", "Oracle", "Java", "C#").map((curso, indice) => {
          return (
            <li key={indice}>
              <div className="lista-nota_texto">{curso}</div>
              <DetalleNotas/>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaNotas;
