import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import OrderCard from './OrderCard';
import { getOrderById } from '../Services/RequestAPI';
import styleOrder from '../pages/Orders/Orders.module.css';

export default function CostumerOrders() {
  const history = useHistory();
  const [orders, setOrders] = useState([]);
  const userData = JSON.parse(localStorage.getItem('user'));
  const { role, token } = userData;

  useEffect(() => {
    async function fetchData() {
      const { data } = await getOrderById(token);
      setOrders(data);
    }
    fetchData();
  }, []);

  return (
    <div className={ styleOrder.containerExterno }>
      { orders.length > 0 && orders.map((order, i) => (
        <button
          className={ styleOrder.containerOrder }
          type="button"
          onClick={ () => history.push(`/customer/orders/${order.id}`) }
          key={ `order-${i}` }
        >
          <OrderCard order={ order } role={ role } key={ `order-${i}` } />
        </button>
      ))}
      { orders.length === 0 && (<h4>Não há pedidos</h4>) }
    </div>
  );
}
