import PropTypes from 'prop-types';
import styleOrder from '../pages/Orders/Orders.module.css';

export default function OrderCard(props) {
  const { order, role } = props;
  const { id, status, saleDate, totalPrice } = order;

  const NOVE = 9;

  function adicionaZero(numero) {
    if (numero <= NOVE) return `0${numero}`;
    return numero;
  }

  const classStatus = () => {
    if (status === 'Pendente') return styleOrder.containerPendente;
    if (status === 'Preparando') return styleOrder.containerPreparando;
    if (status === 'Entregue') return styleOrder.containerEntregue;
    if (status === 'Em Trânsito') return styleOrder.containerEmTransito;
  };

  const newDate = new Date(saleDate);
  const dataFormated = `${adicionaZero(newDate.getDate())}/${adicionaZero(newDate
    .getMonth() + 1)}/${newDate.getFullYear()}`;

  const formatPrice = (totalPrice).replace(/\./, ',');

  const prefixDataTestId = () => {
    if (role === 'customer') {
      return 'customer_orders__element-';
    }

    if (role === 'seller') {
      return 'seller_orders__element-';
    }
  };

  return (
    <div key={ id } className={ styleOrder.interno }>
      <div className={ styleOrder.containerId }>
        <p data-testid={ `${prefixDataTestId()}order-id-${id}` }>
          {`Pedido ${id}`}
        </p>
      </div>
      <div className={ classStatus() }>
        <p data-testid={ `${prefixDataTestId()}delivery-status-${id}` }>
          { status }
        </p>
      </div>
      <div className={ styleOrder.containerPriceDate }>
        <div className={ styleOrder.containerPrice }>
          <p data-testid={ `${prefixDataTestId()}order-date-${id}` }>
            { dataFormated }
          </p>
        </div>
        <div className={ styleOrder.containerDate }>
          <p data-testid={ `${prefixDataTestId()}card-price-${id}` }>
            { formatPrice }
          </p>
        </div>
      </div>
    </div>
  );
}

OrderCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number,
    status: PropTypes.string,
    saleDate: PropTypes.date,
    subTotal: PropTypes.number,
  }),
}.isRequired;
