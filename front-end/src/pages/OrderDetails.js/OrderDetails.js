import React from 'react';
import NavBar from '../../components/NavBar';
import OrderDetailsComp from '../../components/OrderDetailsComp';

export default function OrderDetails() {
  const prefixCustomer = 'customer_order_details__';

  return (
    <div>
      <NavBar />
      <OrderDetailsComp prefix={ prefixCustomer } />
    </div>
  );
}
