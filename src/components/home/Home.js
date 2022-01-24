import { useState, useEffect, useRef, useCallback } from 'react';

import Products from '../products/Products';

import * as firebaseService from '../../services/firebase';
import * as FIREBASE_KEYS from '../../constants/firebase-keys';

const Home = () => {
  const [products, setProducts] = useState([]);

  const productsRef = useRef(firebaseService.getRef(FIREBASE_KEYS.PRODUCTS));
  const tempRef = productsRef.current;

  const loadProducts = useCallback(() => {
    firebaseService.getDataRealtime({ ref: productsRef, callback: onDataLoaded });
  }, [productsRef]);

  const onDataLoaded = val => {
    if (val) {
      const keys = Object.keys(val);
      const data = keys.map(key => val[key]);
      setProducts(() => data);
    }
  }

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  useEffect(() => {
    return () => {
      setProducts(() => []);
      tempRef.off();
    };
  }, [tempRef]);

  if (!products || !products.length) {
    return (
      <div className="info__container">
        <span>There is no products, please add products to sell</span>
      </div>
    );
  }

  return (
    <>
      <Products products={products} />
    </>
  )
};

export default Home;