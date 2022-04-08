import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { FecthApi } from '../actions';
import FormExpenses from '../components/FormExpenses';
import Header from '../components/Header';
import Table from '../components/Table';

class Wallet extends React.Component {
  componentDidMount() {
    // requisição da api
    // console.log('Olá', this.props);
    const { currencies } = this.props;
    currencies();
  }

  render() {
    return (
      <div>
        <Header />
        <FormExpenses />
        <Table />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  currencies: () => dispatch(FecthApi()),

});

Wallet.propTypes = {
  currencies: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);
