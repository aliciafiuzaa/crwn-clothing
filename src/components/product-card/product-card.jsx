import FormInput from '../form-input/form-input';
import './product-card.scss';
import Button from '../button/button';

// where product is, it could be called anything, like props for example
const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted'>Add to cart</Button>
    </div>
  );
};

export default ProductCard;