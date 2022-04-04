// Coloque aqui suas actions
export const CHANGE_INPUT_USER = 'CHANGE_INPUT_USER';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIES';
export const RECEIVE_CURR_FAILURE = 'RECEIVE_CURR_FAILURE';

export const userLogin = (email) => ({
  type: CHANGE_INPUT_USER,
  email,
});

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
