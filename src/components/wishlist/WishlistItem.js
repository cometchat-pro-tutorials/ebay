import * as wishlistService from '../../services/wishlist';

const WishlistItem = ({ product, onItemRemove }) => {

  const remove = () => {
    wishlistService.remove(product);
    onItemRemove(product);
  };

  if (!product) return <></>;

  return (
    <div className="wishlist__item">
      <div className="wishlist__item-left">
        <div className="wishlist__item-img">
          <img src={product.image} alt="wishlist-item" />
        </div>
        <div className="wishlist__item-info">
          <p>Name: {product.name}</p>
          <p>Price: {product.price}$</p>
        </div>
      </div>
      <div className="wishlist__item-right">
        <button onClick={remove}>Remove</button>
      </div>
    </div>
  );
};

export default WishlistItem;