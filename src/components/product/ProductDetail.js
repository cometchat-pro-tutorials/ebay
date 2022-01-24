import { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router';

import * as cartService from '../../services/cart';
import * as routeService from '../../services/route';
import * as storageService from '../../services/storage';
import * as wishlistService from '../../services/wishlist';

import * as ROUTE from '../../constants/routes';
import * as STORAGE_KEYS from '../../constants/storage-keys';


const ProductDetail = ({ toggleModal }) => {
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
    routeService.navigate({ route: ROUTE.SELLER, push: history.push });
  };

  if (!product) return <></>;

  return (
    <div className="detail">
      <div className="detail__content">
        <div className="detail__container">
          <div className="detail__title">Product Detail</div>
          <div className="detail__close">
            <img
              alt="close"
              onClick={() => toggleModal(false)}
              src="https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/__geKiQnSG-.png"
            />
          </div>
        </div>
        <div className="detail__subtitle"></div>
        <div className="detail__info">
          <div className="detail__left">
            <img src={product.image} alt="product" />
          </div>
          <div className="detail__right">
            <p className="detail__ptitle">{product.name} - {product.price}$</p>
            <input className="detail__pquantity" type="number" defaultValue={1} min={1} ref={quantityRef} />
            <div className="detail__actions">
              <button onClick={addToWishlist}>Add to Wishlist</button>
              <button onClick={addToCart}>Add to Cart</button>
              <button onClick={chatWithSeller}>Chat with Seller</button>
            </div>
            <p className="detail__pdescription">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;