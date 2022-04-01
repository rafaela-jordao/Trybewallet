// Coloque aqui suas actions
export const CHANGE_INPUT_USER = 'CHANGE_INPUT_USER';
export const CONTROL_EXPENSES = 'CONTROL_EXPENSES';

export const userLogin = (email) => ({
  type: CHANGE_INPUT_USER,
  email,
});

export const walletExpenses = (walletData) => ({
  type: CONTROL_EXPENSES,
  walletData,
});
