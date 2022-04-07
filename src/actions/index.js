// Coloque aqui suas actions
export const CHANGE_INPUT_USER = 'CHANGE_INPUT_USER';
export const REQUEST_EXPENSES = 'REQUEST_EXPENSES';
export const RECEIVE_EXPENSES = 'RECEIVE_EXPENSES';
export const RECEIVE_EXP_FAILURE = 'RECEIVE_EXP_FAILURE';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIES';
export const RECEIVE_CURR_FAILURE = 'RECEIVE_CURR_FAILURE';

// action login
export const userLogin = (email) => ({
  type: CHANGE_INPUT_USER,
  email,
});

// actions currencies
export const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES,
});

export const receiveCurrencies = (currencies) => ({
  type: RECEIVE_CURRENCIES,
  currencies,
});

export const receiveCurrenciesFailure = (error) => ({
  type: RECEIVE_CURR_FAILURE,
  error,
});

// actions expenses

export const requestExpenses = () => ({
  type: REQUEST_EXPENSES,
});

export const receiveExpenses = (result, expenses) => ({
  type: RECEIVE_EXPENSES,
  result,
  expenses,
});

export const receiveExpFailure = (error) => ({
  type: RECEIVE_EXP_FAILURE,
  error,
});

// action creator que retorna uma função, possível por conta do pacote redux-thunk.
export function FecthApi() {
  return async (dispatch) => {
    // avisa para a aplicação que esta sendo iniciado o fetch.
    dispatch(requestCurrencies());
    try {
      // faz o fetch da api
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const result = await response.json();
      dispatch(receiveCurrencies(result));
    } catch (error) {
      dispatch(receiveCurrenciesFailure(error));
    }
  };
}

export function FecthExpenses(expenses) {
  return async (dispatch) => {
    dispatch(requestExpenses());
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const result = await response.json();
      dispatch(receiveExpenses(result, expenses));
    } catch (error) {
      dispatch(receiveExpFailure(error));
    }
  };
}
