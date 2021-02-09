import React, { Component } from "react";

class RegistroNotas extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Titulo" />
        <textarea placeholder="Registro de nota" />
        <button>Registrar nota</button>
      </form>
    );
  }
}

export default RegistroNotas;
