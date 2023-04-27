import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styleNavBar from '../styles/NavBar.module.css';

export default function NavBar() {
  const [userName, setUserName] = useState('');
  const [navTitle, setNavTitle] = useState('');
  const [role, setRole] = useState('');

  const history = useHistory();
  const NADIE = '';

  const user = JSON.parse(localStorage.getItem('user'));

  const defineRoute = () => {
    if (user.role === 'seller') return '/seller/orders';
    if (user.role === 'customer') return '/customer/products';
  };

  const dataTestId = () => {
    if (user.role === 'customer') return 'products';
    if (user.role === 'seller') return 'orders';
  };

  useEffect(() => {
    if (!user) {
      history.push('/login');
    }

    setUserName(user.name);

    if (user.role === 'customer') {
      setRole(user.role);
    }

    switch (user.role) {
    case ('administrator'):
      setNavTitle('Gerenciar Usuários');
      break;
    case ('seller'):
      setNavTitle('Pedidos');
      break;
    default:
      setNavTitle('Produtos');
    }
  }, []);

  const buttonLogout = () => {
    localStorage.removeItem('user');
    history.push('/login');
  };

  return (
    <nav className={ styleNavBar.containerNavBar }>
      <button
        className={ styleNavBar.containerFirst }
        type="button"
        data-testid={ `customer_products__element-navbar-link-${dataTestId()}` }
        onClick={ () => history.push(defineRoute()) }
      >
        {navTitle}
      </button>
      {
        role && (
          <button
            className={ styleNavBar.containerOrders }
            type="button"
            data-testid="customer_products__element-navbar-link-orders"
            onClick={ () => history.push('/customer/orders') }
          >
            Meus Pedidos
          </button>
        )
      }
      {
        !role && (
          <div className={ styleNavBar.containerOrders }>{NADIE}</div>
        )
      }
      <div className={ styleNavBar.containerName }>
        <h2 data-testid="customer_products__element-navbar-user-full-name">{userName}</h2>
      </div>
      <button
        className={ styleNavBar.containerLogout }
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ buttonLogout }
      >
        Sair
      </button>
    </nav>
  );
}
