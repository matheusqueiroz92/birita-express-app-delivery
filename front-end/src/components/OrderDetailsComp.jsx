import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import OrderDetailsCard from './OrderDetailsCard';
import { updateOrderStatus, getOrderDetailById } from '../Services/RequestAPI';
import ErrorMessage from './ErrorMessage';
import formatDate from '../utils/formatDate';
import styleOrderDetails from '../pages/OrderDetails.js/OrderDetails.module.css';

export default function OrderDetailsComp({ prefix }) {
  const [totalCart, setTotalCart] = useState();
  const [order, setOrder] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  const { location: { pathname } } = useHistory();

  const { id: idOrder } = useParams();
  const { token } = JSON.parse(localStorage.getItem('user'));

  const disablePreparing = (order?.status !== 'Pendente');

  const disableDispatch = order?.status !== 'Preparando';

  const colorButtonStatusCustomer = () => {
    if (
      order?.status === 'Pendente'
      || order?.status === 'Preparando'
      || order?.status === 'Entregue') {
      return styleOrderDetails.buttonDisableCustomer;
    }
    return styleOrderDetails.buttonOrder;
  }; // condicional para CSS

  const colorButtonOneStatusSeller = () => {
    if (order?.status === 'Pendente') return styleOrderDetails.buttonOrder;
    return styleOrderDetails.buttonDisableSeller;
  };

  const colorButtonTwoStatusSeller = () => {
    if (order?.status === 'Preparando') return styleOrderDetails.buttonOrder;
    return styleOrderDetails.buttonDisableSeller;
  };

  const calculateTotalCart = (products) => {
    const totalVal = products.reduce((acc, item) => {
      acc += +item.subTotal;
      return acc;
    }, 0);
    return totalVal.toFixed(2).replace('.', ',');
  };

  const updateStatus = async ({ target: { id } }) => {
    const status = id;

    try {
      setErrorMsg(null);
      const { data } = await updateOrderStatus(idOrder, { status }, token);
      setOrder((prevOrder) => ({ ...prevOrder, status: data.status }));
    } catch (e) {
      setIsLoading(false);
      const { response } = e;
      setErrorMsg(response?.data.message);
    }
  };

  const columnStatus = () => {
    if (order?.status === 'Pendente') return styleOrderDetails.columnStatusPendente;
    if (order?.status === 'Em Preparo') return styleOrderDetails.columnStatusEmPreparo;
    if (order?.status === 'Em Trânsito') return styleOrderDetails.columnStatusEmTransito;
    if (order?.status === 'Entregue') return styleOrderDetails.columnStatusEntregue;
  }; // condicional para CSS

  useEffect(() => {
    async function fetchData() {
      const { data } = await getOrderDetailById(idOrder, token);
      setOrder(data);
      setTotalCart(calculateTotalCart(data.products));
    }
    try {
      fetchData();
      setErrorMsg(null);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      const { response } = e;
      setErrorMsg(response?.data.message);
    }
  }, []);

  return (
    <div className={ styleOrderDetails.containerGeral }>
      <div>
        <h3>Detalhe do Pedido </h3>
      </div>
      {isLoading && <span>Carregando...</span>}
      { !isLoading && (
        <div>
          <table className={ styleOrderDetails.tableCheckout }>
            <thead className={ styleOrderDetails.theadTable }>
              <th
                data-testid={ `${prefix}element-order-details-label-order-id` }
              >
                Pedido
                {' '}
                { order?.id }
              </th>
              <th data-testid={ `${prefix}element-order-details-label-seller-name` }>
                {order?.seller.name}
              </th>
              <th data-testid={ `${prefix}element-order-details-label-order-date` }>
                {formatDate(order?.saleDate)}
              </th>
              <th
                className={ columnStatus() }
                data-testid={
                  `${prefix}element-order-details-label-delivery-status${idOrder}`
                }
              >
                {order?.status}
              </th>
              <th className={ styleOrderDetails.columnButtons }>
                {pathname.includes('/customer/orders/')
                && (
                  <button
                    className={ colorButtonStatusCustomer() }
                    data-testid={ `${prefix}button-delivery-check` }
                    type="button"
                    id="Entregue"
                    disabled={ order?.status !== 'Em Trânsito' }
                    onClick={ updateStatus }
                  >
                    MARCAR COMO ENTREGUE
                  </button>
                )}
                { pathname.includes('/seller/orders')
                  && (
                    <div className={ styleOrderDetails.containerButtons }>
                      <button
                        className={ colorButtonOneStatusSeller() }
                        data-testid={ `${prefix}button-preparing-check` }
                        type="button"
                        id="Preparando"
                        disabled={ disablePreparing }
                        onClick={ updateStatus }
                      >
                        PREPARANDO PEDIDO
                      </button>
                      <button
                        className={ colorButtonTwoStatusSeller() }
                        data-testid={ `${prefix}button-dispatch-check` }
                        type="button"
                        disabled={ disableDispatch }
                        id="Em Trânsito"
                        onClick={ updateStatus }
                      >
                        SAIU PARA ENTREGA
                      </button>
                    </div>
                  ) }
              </th>
            </thead>
            <tbody>
              { order?.products.map((item, i) => (
                <OrderDetailsCard
                  key={ i }
                  item={ item }
                  id={ i }
                  prefix={ prefix }
                />))}
            </tbody>
          </table>
          <button
            className={ styleOrderDetails.buttonTotal }
            type="button"
          >
            TOTAL: R$
            {' '}
            <span data-testid={ `${prefix}element-order-total-price` }>
              {totalCart}
            </span>
          </button>
        </div>
      )}
      { errorMsg && <ErrorMessage ErrorMsg={ errorMsg } /> }
    </div>
  );
}

OrderDetailsComp.propTypes = {
  prefix: PropTypes.string,
}.isRequired;
