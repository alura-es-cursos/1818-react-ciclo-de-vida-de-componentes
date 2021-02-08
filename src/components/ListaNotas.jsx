import { Component } from "react";

export default class ListaNotas extends Component {
  render() {
    return (
      <ul>
        <li>
          <section>
            <header>
              <h3>Titulo 1</h3>
              <p>Registro de nota 1</p>
            </header>
          </section>
        </li>
        <li>
          <section>
            <header>
              <h3>Titulo 2</h3>
              <p>Registro de nota 2</p>
            </header>
          </section>
        </li>
        <li>
          <section>
            <header>
              <h3>Titulo 3</h3>
              <p>Registro de nota 3</p>
            </header>
          </section>
        </li>
      </ul>
    );
  }
}
