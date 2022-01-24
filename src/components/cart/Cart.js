import { useState, useEffect, useMemo } from 'react';
import { useHistory } from 'react-router';

import CartItem from './CartItem';

import * as routeService from '../../services/route';
import * as ROUTE from '../../constants/routes';

import * as storageService from '../../services/storage';
import * as STORAGE_KEYS from '../../constants/storage-keys';

const Cart = () => {
  const [products, setProducts] = useState([]);

  const history = useHistory();

  const calculateTotalPrice = products => {
    if (!products || !products.length) return 0;
    let sum = 0;
    for (const product of products) {
      sum = sum + (product.price * product.quantity);
    }
    return sum;
  };

  const totalPrice = useMemo(() => calculateTotalPrice(products), [products])

  useEffect(() => {
    const cart = JSON.parse(storageService.get(STORAGE_KEYS.CART));
    if (cart && cart.length) {
      setProducts(() => cart);
    }
  }, []);

  const onItemRemove = product => {
    setProducts(prevProducts => prevProducts.filter(p => p.id !== product.id));
  };

  const payment = () => {
    storageService.remove(STORAGE_KEYS.CART);
    routeService.navigate({ route: ROUTE.PAYMENT, push: history.push });
  }

  if (!products || !products.length) {
    return (
      <div className="cart__container">
        <span>There is no products in the cart</span>
      </div>
    );
  }

  return (
    <div className="cart">
      {products.map(product => <CartItem key={product.id} product={product} onItemRemove={onItemRemove} />)}
      <div className="cart__totalc">
        <div className="cart__total">Total Price: {totalPrice}$</div>
        <div className="cart__payment">
          <button onClick={payment}>Payment</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;