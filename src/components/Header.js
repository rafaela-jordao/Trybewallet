import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FecthApi } from '../actions';

class Header extends Component {
  componentDidMount() {
  // requisição da api
  // console.log('Olá', this.props);
    const { currencies } = this.props;
    currencies();
  }

  render() {
    const { user } = this.props;

    return (
      <header className="header">

        <div data-testid="email-field">
          {user.email}
        </div>
        <div>
          Despesa Total:
          <span data-testid="total-field"> R$0</span>
        </div>
        <div data-testid="header-currency-field">BRL</div>

      </header>

    );
  }
}

const mapStateToProps = (store) => ({
  ...store,
});

const mapDispatchToProps = (dispatch) => ({
  currencies: () => dispatch(FecthApi()),
});

Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }).isRequired,
  currencies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
