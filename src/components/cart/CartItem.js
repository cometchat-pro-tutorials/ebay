import * as cartService from '../../services/cart';

const CartItem = ({ product, onItemRemove }) => {

  const remove = () => {
    cartService.remove(product);
    onItemRemove(product);
  };

  if (!product) return <></>;

  return (
    <div className="cart__item">
      <div className="cart__item-left">
        <div className="cart__item-img">
          <img src={product.image} alt="cart-item" />
        </div>
        <div className="cart__item-info">
          <p>Name: {product.name}</p>
          <p>Price: {product.price}$</p>
          <p>Quantity: {product.quantity}</p>
        </div>
      </div>
      <div className="cart__item-right">
        <button onClick={remove}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;