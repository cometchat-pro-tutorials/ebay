import { useState, useEffect } from 'react';

import WishlistItem from './WishlistItem';

import * as storageService from '../../services/storage';
import * as STORAGE_KEYS from '../../constants/storage-keys';

const Wishlist = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const wishlist = JSON.parse(storageService.get(STORAGE_KEYS.WISHLIST));
    if (wishlist && wishlist.length) { 
      setProducts(() => wishlist);
    }
  }, []);

  const onItemRemove = product => {
    setProducts(prevProducts => prevProducts.filter(p => p.id !== product.id));
  };

  if (!products || !products.length) {
    return (
      <div className="wishlist__container">
        <span>There is no products in the wishlist</span>
      </div>
    );
  }

  return (
    <div className="wishlist">
      {products.map(product => <WishlistItem key={product.id} product={product} onItemRemove={onItemRemove} />)}
    </div>
  );
};

export default Wishlist;