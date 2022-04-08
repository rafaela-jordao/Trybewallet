// Esse reducer será responsável por tratar todas as informações relacionadas as despesas

import {
  RECEIVE_CURRENCIES,
  RECEIVE_CURR_FAILURE,
  RECEIVE_EXPENSES,
  REQUEST_CURRENCIES,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
  error: null,
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return {
      ...state,
      isFetching: true,
    };
  case RECEIVE_CURRENCIES:
    return {
      ...state,
      isFetching: false,
      currencies: Object.keys(action.currencies).filter((key) => key !== 'USDT'), // remove das infos trazidas pela API a opção USDT.
    };
  case RECEIVE_CURR_FAILURE:
    return {
      ...state,
      isFetching: false,
      error: action.error,
    };
  case RECEIVE_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses,
        { ...action.expenses, exchangeRates: { ...action.result } }],

    };

  default:
    return state;
  }
}

export default walletReducer;
