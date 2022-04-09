import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
  render() {
    const { expenses } = this.props;

    return (

      <table>
        <thead>
          <tr>
            <th>Valor</th>
            <th>Descrição</th>
            <th>Moeda</th>
            <th>Método de pagamento</th>
            <th>Tag</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>

        <tbody>
          {
            expenses.map((el) => (
              <tr key={ el.id }>
                <td>{Number(el.value).toFixed(2)}</td>
                <td>{el.description}</td>
                <td>{el.exchangeRates[el.currency].name}</td>
                <td>{el.method}</td>
                <td>{el.tag}</td>
                <td>{Number(el.exchangeRates[el.currency].ask).toFixed(2)}</td>
                <td>
                  {(Number(el.value).toFixed(2)
                  * Number(el.exchangeRates[el.currency].ask)).toFixed(2)}

                </td>
                <td>Real</td>

              </tr>
            ))
          }
        </tbody>
      </table>

    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    exchangeRates: PropTypes.objectOf(PropTypes.objectOf(PropTypes.string)),
  })).isRequired,
};

export default connect(mapStateToProps)(Table);

// referência: https://www.w3schools.com/html/html_tables.asp
