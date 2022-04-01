import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
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

Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, null)(Header);
