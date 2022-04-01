// Esse reducer será responsável por tratar todas as informações relacionadas as despesas

import { CONTROL_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CONTROL_EXPENSES:
    return {
      ...state,
      currencies: action.currencies,
      expenses: action.expenses,
    };
  default:
    return state;
  }
}

export default walletReducer;
