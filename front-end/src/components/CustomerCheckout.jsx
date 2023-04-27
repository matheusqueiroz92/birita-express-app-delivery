import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import CartContext from '../context/CartContext';
import OrderDetailsCard from './OrderDetailsCard';
import { getCart, totalValue } from '../utils/localstorage';
import { getSellers, postOrder } from '../Services/RequestAPI';
import ErrorMessage from './ErrorMessage';
import styleTableCheckout from '../pages/CustomerCheckout/Checkout.module.css';

export default function CustomerCheckout() {
  const { cart, newCart, totalCart, newValue } = useContext(CartContext);
  const history = useHistory();
  const [sellers, setSellers] = useState([]);
  const [selectedSeller, setSelectedSeller] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState(0);
  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const prefix = 'customer_checkout__';

  useEffect(() => {
    newCart(getCart());
    newValue(totalValue());

    async function fetchData() {
      const { data } = await getSellers();
      setSellers(data);
      setSelectedSeller(data[0].id);
    }
    fetchData();
  }, []);

  const sendOrder = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));

    try {
      setShowError(false);
      const { data } = await postOrder('/sales', {
        sellerId: +selectedSeller,
        totalPrice: Number(totalCart.replace(',', '.')),
        deliveryAddress: address,
        deliveryNumber: Number(number),
        saleDate: new Date().toISOString(),
        status: 'Pendente',
        products: cart.map(({ id, quantity }) => ({ productId: id, quantity })),
      }, token);

      history.push(`/customer/orders/${data.id}`);
    } catch (e) {
      const { response } = e;
      setErrorMsg(response.data.message);
      setShowError(true);
    }
  };

  return (
    <div className={ styleTableCheckout.containerGeral }>
      <div className={ styleTableCheckout.containerTable }>
        <h3>Finalizar Pedido</h3>
      </div>
      <div>
        <table className={ styleTableCheckout.tableCheckout }>
          <thead className={ styleTableCheckout.theadTable }>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </thead>
          <tbody>
            { cart.map((item, i) => (
              <OrderDetailsCard
                key={ i }
                item={ item }
                id={ i }
                prefix={ prefix }
              />))}
          </tbody>
        </table>
        <div className={ styleTableCheckout.totalCart }>
          TOTAL: R$
          {' '}
          <span data-testid={ `${prefix}element-order-total-price` }>{totalCart}</span>
        </div>
        <h3 className={ styleTableCheckout.titleAddressDetails }>
          Detalhes e Endereço para Entrega
        </h3>
        <p>Selecione o Vendedor:</p>
        <div className={ styleTableCheckout.containerSelect }>
          <select
            className={ styleTableCheckout.selectSeller }
            id="selectSeller"
            data-testid={ `${prefix}select-seller` }
            value={ selectedSeller }
            onChange={ (e) => setSelectedSeller(e.target.value) }
          >
            {sellers.map((sell) => (
              <option value={ sell.id } key={ sell.id }>{sell.name}</option>))}
          </select>
          <input
            className={ styleTableCheckout.inputAddress }
            placeholder="Digite seu endereço"
            name="address"
            type="text"
            data-testid={ `${prefix}input-address` }
            value={ address }
            onChange={ (e) => setAddress(e.target.value) }
          />
          <input
            className={ styleTableCheckout.inputNumberAddress }
            placeholder="Número"
            name="numberAddress"
            type="number"
            data-testid={ `${prefix}input-address-number` }
            value={ number }
            onChange={ (e) => setNumber(e.target.value) }
          />
          <button
            className={ styleTableCheckout.buttonFinishOrder }
            type="button"
            data-testid={ `${prefix}button-submit-order` }
            onClick={ sendOrder }
            disabled={ cart.length < 1 }
          >
            FINALIZAR PEDIDO
          </button>
        </div>
        { showError && <ErrorMessage ErrorMsg={ errorMsg } /> }
      </div>
    </div>
  );
}
