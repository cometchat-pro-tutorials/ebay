import { useState, useEffect, useRef, useCallback } from 'react';

import Products from '../products/Products';

import * as firebaseService from '../../services/firebase';
import * as storageService from '../../services/storage';

import * as FIREBASE_KEYS from '../../constants/firebase-keys';
import * as STORAGE_KEYS from '../../constants/storage-keys';

const SearchProducts = () => {
  const [products, setProducts] = useState();

  const productsRef = useRef(firebaseService.getRef(FIREBASE_KEYS.PRODUCTS));
  const tempRef = productsRef.current;

  const loadProducts = useCallback(keywords => {
    firebaseService.getDataRealtimeQuery({ ref: productsRef, query: FIREBASE_KEYS.NAME, criteria: keywords, callback: onDataLoaded });
  }, [productsRef]);

  const onDataLoaded = val => {
    if (val) {
      const keys = Object.keys(val);
      const data = keys.map(key => val[key]);
      setProducts(() => data);
    }
  }

  useEffect(() => {
    const keywords = storageService.get(STORAGE_KEYS.KEYWORD);
    if (keywords) {
      loadProducts(keywords);
    }
  }, [loadProducts]);

  useEffect(() => {
    return () => {
      setProducts(() => []);
      tempRef.off();
    };
  }, [tempRef]);

  return (
    <div>
      <Products products={products} />
    </div>
  );
};

export default SearchProducts;