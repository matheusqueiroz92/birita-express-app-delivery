import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import postLogin from '../Services/RequestAPI';
import ErrorMessage from './ErrorMessage';
import styleLogin from '../pages/Login/Login.module.css';
import biritaExpress from '../pages/Login/logoBiritaExpress.png';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabledLogin, setDisabledLogin] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const [loginError, setLoginError] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      history.push('/customer/products');
    }

    const MIN_PASS_LENGTH = 6;
    const isEmailValid = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email);
    const isPasswordValid = (password.length >= MIN_PASS_LENGTH);

    if (isEmailValid && isPasswordValid) {
      setDisabledLogin(false);
    } else setDisabledLogin(true);
  }, [email, password]);

  async function handleLogin() {
    try {
      setLoginError(false);
      const { data } = await postLogin({ email, password });
      localStorage.setItem('user', JSON.stringify({
        name: data.name,
        email: data.email,
        role: data.role,
        token: data.token,
      }));

      switch (data.role) {
      case 'customer':
        history.push('/customer/products');
        break;
      case 'seller':
        history.push('/seller/orders');
        break;
      case 'administrator':
        history.push('/admin/manage');
        break;
      default:
        history.push('/login');
      }
    } catch (error) {
      const { response } = error;
      setLoginError(true);
      setErrorMsg(response.data.message);
    }
  }

  return (
    <div className={ styleLogin.formLogin }>
      <img src={ biritaExpress } alt="biritaExpress" />
      <p>TrybeTunes</p>
      <form>
        <label htmlFor="email" className={ styleLogin.labelForm }>
          Usuário:
          <input
            type="email"
            name="email"
            id="email"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
            data-testid="common_login__input-email"
          />
        </label>
        <label htmlFor="password" className={ styleLogin.labelForm }>
          Senha:
          <input
            type="password"
            name="password"
            id="password"
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
            data-testid="common_login__input-password"
          />
        </label>
        <button
          disabled={ disabledLogin }
          type="button"
          data-testid="common_login__button-login"
          onClick={ handleLogin }
        >
          Login
        </button>
        <button
          type="button"
          data-testid="common_login__button-register"
          onClick={ () => history.push('/register') }
        >
          Cadastrar
        </button>
        { loginError && (
          <ErrorMessage
            ErrorMsg={ errorMsg }
            dataTestId="common_login__element-invalid-email"
          />
        ) }
      </form>
    </div>
  );
}
