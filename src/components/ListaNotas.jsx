import React, { Component } from 'react';
import DetalleNotas from "./DetalleNotas";

class ListaNotas extends Component {
  render() {
    return (
      <ul>
        <li>
          <DetalleNotas />
        </li>
        <li>
          <DetalleNotas />
        </li>
        <li>
          <DetalleNotas />
        </li>
      </ul>
    );
  }
}

export default ListaNotas;