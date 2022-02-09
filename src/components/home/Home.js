import { useState, useEffect, useRef, useCallback, useContext } from "react";

import HomeBanner from "./HomeBanner";
import HomeSection from "./HomeSection";
import HomeProducts from "./HomeProducts";

import * as categoryService from "../../services/category";
import * as firebaseService from "../../services/firebase";
import * as FIREBASE_KEYS from "../../constants/firebase-keys";

import { Context } from "../../context/AppContext";

const Home = () => {
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const productsRef = useRef(firebaseService.getRef(FIREBASE_KEYS.PRODUCTS));
  const tempRef = productsRef.current;

  const { user } = useContext(Context);

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

  const loadProducts = useCallback(() => {
    firebaseService.getDataRealtime({
      ref: productsRef,
      callback: onDataLoaded,
    });
  }, [productsRef, onDataLoaded]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  useEffect(() => {
    return () => {
      setProducts(() => []);
      tempRef.off();
    };
  }, [tempRef]);

  useEffect(() => {
    setBrands(() => categoryService.getBrands());
    setCategories(() => categoryService.getCategories());
  }, []);

  return (
    <div className="home">
      <HomeBanner />
      <HomeSection title="Explore popular brands" data={brands} />
      <HomeSection title="Explore popular categories" data={categories} />
      <HomeProducts products={products} />
    </div>
  );
};

export default Home;
