import { useState, useEffect, useRef, useCallback, useContext } from "react";
import { useHistory } from "react-router";

import SearchCategories from "./SearchCategories";
import SearchProductItem from "./SearchProductItem";

import * as firebaseService from "../../services/firebase";
import * as storageService from "../../services/storage";
import * as routeService from "../../services/route";

import * as FIREBASE_KEYS from "../../constants/firebase-keys";
import * as STORAGE_KEYS from "../../constants/storage-keys";
import * as ROUTES from "../../constants/routes";

import { Context } from "../../context/AppContext";

const SearchProducts = () => {
  const [products, setProducts] = useState([]);

  const productsRef = useRef(firebaseService.getRef(FIREBASE_KEYS.PRODUCTS));
  const tempRef = productsRef.current;

  const { user } = useContext(Context);

  const history = useHistory();

  const transformData = useCallback(
    (data) => {
      if (!data || !data.length || !user) return data;
      return data.filter((product) => product && product.createdBy !== user.id);
    },
    [user]
  );

  const onDataLoaded = useCallback(
    (val) => {
      if (val) {
        const keys = Object.keys(val);
        const data = keys.map((key) => val[key]);
        setProducts(() => transformData(data));
      }
    },
    [transformData]
  );

  const loadProducts = useCallback(
    (keywords) => {
      firebaseService.getDataRealtimeQuery({
        ref: productsRef,
        query: FIREBASE_KEYS.NAME,
        criteria: keywords,
        callback: onDataLoaded,
      });
    },
    [productsRef, onDataLoaded]
  );

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

  const onProductClicked = (product) => () => {
    if (product) {
      storageService.save({
        key: STORAGE_KEYS.PRODUCT,
        payload: JSON.stringify(product),
      });
      routeService.navigate({ route: ROUTES.DETAIL, push: history.push });
    }
  };

  return (
    <div className="search__re">
      <div className="search__rel">
        <SearchCategories />
      </div>
      <div className="search__rem">
        {products.map((product) => (
          <SearchProductItem
            key={product.id}
            product={product}
            onProductClicked={onProductClicked}
          />
        ))}
      </div>
      <div className="search__rer"></div>
    </div>
  );
};

export default SearchProducts;
