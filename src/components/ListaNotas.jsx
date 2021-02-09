import React, { Component } from "react";
import DetalleNotas from "./DetalleNotas";

class ListaNotas extends Component {
  render() {
    return (
      <ul>
        {Array.of("React", "Oracle", "Java", "C#").map((curso, indice) => {
          return (
            <li key={indice}>
              <div>{curso}</div>
              <DetalleNotas/>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaNotas;
