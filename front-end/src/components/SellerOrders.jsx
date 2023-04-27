import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import OrderCard from './OrderCard';
import { getOrdersBySellerId } from '../Services/RequestAPI';
import styleSellerOrders from '../pages/SellerOrders/SellerOrders.module.css';

export default function SellerOrders() {
  const history = useHistory();
  const [orders, setOrders] = useState([]);
  const userData = JSON.parse(localStorage.getItem('user'));
  const { role, token } = userData;

  useEffect(() => {
    async function fetchData() {
      const { data } = await getOrdersBySellerId(token);
      setOrders(data);
    }
    fetchData();
  }, []);

  return (
    <div className={ styleSellerOrders.containerExterno }>
      { orders.length > 0 && orders.map((order, i) => (
        <button
          className={ styleSellerOrders.containerOrder }
          type="button"
          onClick={ () => history.push(`/seller/orders/${order.id}`) }
          key={ `order-${i}` }
        >
          <div className={ styleSellerOrders.containerExtra }>
            <div className={ styleSellerOrders.containerOrderCard }>
              <OrderCard order={ order } role={ role } key={ `order-${i}` } />
            </div>
            <div className={ styleSellerOrders.containerAddress }>
              <p>{ `${order.deliveryAddress},${order.deliveryNumber}` }</p>
            </div>
          </div>
        </button>
      ))}
      { orders.length === 0 && (<h4>Não há pedidos</h4>) }
    </div>
  );
}
