import NavBar from '../../components/NavBar';
import ProductsList from '../../components/ProductsList';
import styleProducts from './Products.module.css';

export default function Products() {
  return (
    <div className={ styleProducts.bodyPage }>
      <NavBar />
      <ProductsList />
    </div>
  );
}
