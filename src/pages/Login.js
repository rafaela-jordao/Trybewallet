import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnDisabled: true,
      email: '',
      senha: '',
    };
  }

  handleLogin = () => {
    const { email, senha } = this.state;
    const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const minPassword = 6;

    if (emailRegex.test(email) && senha.length >= minPassword) {
      this.setState({
        btnDisabled: false,
      });
    } else {
      this.setState({
        btnDisabled: true });
    }
  };

  btnLogin = () => {
    const { dispatchUserLogin, history } = this.props;
    const { email } = this.state;

    dispatchUserLogin(email);
    history.push('/carteira');
  }

  render() {
    const { btnDisabled } = this.state;
    return (
      <div className="Login">
        <h3 className="text-center">Login</h3>
        <section className="login-inputs">
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            data-testid="email-input"
            onChange={ (e) => this.setState({ email: e.target.value }, this.handleLogin) }

          />
          <input
            type="password"
            placeholder="Senha"
            data-testid="password-input"
            onChange={ (e) => this.setState({ senha: e.target.value }, this.handleLogin) }

          />
        </section>
        <button
          className="btn-login"
          type="button"
          onClick={ this.btnLogin }
          disabled={ btnDisabled }

        >
          Entrar

        </button>

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchUserLogin: (email) => dispatch(userLogin(email)),
});

Login.propTypes = {
  dispatchUserLogin: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

// referência expressão regular para validação de email:
// https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail

export default connect(null, mapDispatchToProps)(Login);
