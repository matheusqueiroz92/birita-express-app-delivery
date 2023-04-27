import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import CartContext from '../context/CartContext';
import { getCart, totalValue } from '../utils/localstorage';
import styleTableCheckout from '../pages/CustomerCheckout/Checkout.module.css';

export default function OrderDetailsCard(props) {
  const { item, id, prefix } = props;

  const history = useHistory();
  const { cart, newCart, newValue } = useContext(CartContext);

  const [checkout, setCheckout] = useState(false);

  useEffect(() => {
    if (history.location.pathname === '/customer/checkout') setCheckout(true);
    newCart(getCart());
  }, []);

  const removeItem = () => {
    const newCartItens = cart.filter((itemCart) => itemCart.id !== item.id);
    newCart(newCartItens);
    localStorage.setItem('cart', JSON.stringify(newCartItens));
    newValue(totalValue());
  };

  const classButtonTable = () => {
    if (checkout) return styleTableCheckout.columnSix;
    return styleTableCheckout.removeColumn;
  };

  const showRemoveButton = (
    <button
      className={ styleTableCheckout.buttonRemove }
      type="button"
      data-testid={ `${prefix}element-order-table-remove-${id}` }
      onClick={ removeItem }
    >
      Remover
    </button>
  );

  return (
    <tr>
      <td
        className={ styleTableCheckout.columnOne }
        data-testid={ `${prefix}element-order-table-item-number-${id}` }
      >
        {id + 1}
      </td>
      <td
        className={ styleTableCheckout.columnTwo }
        data-testid={ `${prefix}element-order-table-name-${id}` }
      >
        {item.name}
      </td>
      <td
        className={ styleTableCheckout.columnThree }
        data-testid={ `${prefix}element-order-table-quantity-${id}` }
      >
        {item.quantity}
      </td>
      <td
        className={ styleTableCheckout.columnFour }
        data-testid={ `${prefix}element-order-table-unit-price-${id}` }
      >
        {item.price.replace('.', ',')}
      </td>
      <td
        className={ styleTableCheckout.columnFive }
        data-testid={ `${prefix}element-order-table-sub-total-${id}` }
      >
        {item.subTotal.replace('.', ',')}
      </td>
      <td className={ classButtonTable() }>
        {checkout ? showRemoveButton : null}
      </td>
    </tr>
  );
}

OrderDetailsCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  quantity: PropTypes.number,
  unitPrice: PropTypes.number,
  subTotal: PropTypes.number,
}.isRequired;
