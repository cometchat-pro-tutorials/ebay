
import { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router';

import * as cartService from '../../services/cart';
import * as routeService from '../../services/route';
import * as storageService from '../../services/storage';
import * as wishlistService from '../../services/wishlist';

import * as ROUTES from '../../constants/routes';
import * as STORAGE_KEYS from '../../constants/storage-keys';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);

  const quantityRef = useRef(null);

  const history = useHistory();

  useEffect(() => {
    const product = JSON.parse(storageService.get(STORAGE_KEYS.PRODUCT));
    if (product) {
      setProduct(() => product);
    }
  }, []);

  const addToWishlist = () => {
    wishlistService.addToWishlist(product);
  };

  const addToCart = () => {
    const quantity = quantityRef.current.value;
    product.quantity = +quantity;
    cartService.addToCart(product);
  };

  const chatWithSeller = () => {
    storageService.save({ key: STORAGE_KEYS.SELLER, payload: product.createdBy });
    routeService.navigate({ route: ROUTES.SELLER, push: history.push });
  };

  if (!product) return <></>;

  return (
    <div className="product__detail">
      <div className="product__detaili">
        <img src={product.image} alt="product" />
      </div>
      <div className="product__detailinf">
        <p className="product__detailn">{product.name}</p>
        <p className="product__detailp">{product.price}$</p>
        <div className="product__detailqc">
          <span>Quantity: </span>
          <input className="product__detailq" type="number" defaultValue={1} min={1} ref={quantityRef} />
        </div>
        <div className="product__detaila">
          <button onClick={addToWishlist}>Add to Wishlist</button>
          <button onClick={addToCart}>Add to Cart</button>
          <button onClick={chatWithSeller}>Chat with Seller</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;