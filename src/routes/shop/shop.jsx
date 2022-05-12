import { useContext } from 'react';
import { ProductsContext } from '../../context/products.context';
import ProductCard from '../../components/product-card/product-card';
import './shop.scss';

const Shop = () => {
  // give me the products from ProductsContext
  // gonna pass the product as a whole in the product card product={product}
  const {products}  = useContext(ProductsContext)
  return (
    <div className='products-container'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </div>
  )
}

export default Shop;