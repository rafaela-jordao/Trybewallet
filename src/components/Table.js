import React, { Component } from 'react';

class Table extends Component {
  render() {
    return (

      <table>
        <thead>
          <tr>
            <th>Valor</th>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>

          </tr>
        </thead>
      </table>

    );
  }
}

export default Table;
