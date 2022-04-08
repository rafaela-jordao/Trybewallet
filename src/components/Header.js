import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  // req.6 - atualiza a soma das despesas
  sumExpenses(expenses) {
    const value = expenses.reduce((acc, valorAtual) => {
      const total = valorAtual.value * valorAtual.exchangeRates[valorAtual.currency].ask;
      acc += total;
      return acc;
    }, 0);
    return value;
  }

  render() {
    const { email, expenses } = this.props;

    return (
      <header className="header">

        <div data-testid="email-field">
          { email}
        </div>
        <div>
          Despesa Total:
          <p
            data-testid="total-field"
            value="0"
          >
            {this.sumExpenses(expenses).toFixed(2)}

          </p>
        </div>
        <div data-testid="header-currency-field">BRL</div>

      </header>

    );
  }
}

const mapStateToProps = (store) => ({
  email: store.user.email,
  expenses: store.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf.isRequired,

};

export default connect(mapStateToProps, null)(Header);

// referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
