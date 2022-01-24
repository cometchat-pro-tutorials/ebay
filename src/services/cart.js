import * as uiService from './ui';
import * as storageService from './storage';
import * as STORAGE_KEYS from '../constants/storage-keys';

export const remove = product => {
  let cart = JSON.parse(storageService.get(STORAGE_KEYS.CART));
  if (!cart || !cart.length) return;
  cart = cart.filter(cartProduct => cartProduct.id !== product.id);
  storageService.save({ key: STORAGE_KEYS.CART, payload: JSON.stringify(cart) });
}

export const addToCart = product => {
  const cart = JSON.parse(storageService.get(STORAGE_KEYS.CART));
  if (cart && cart.length) {
    updateCart(cart, product);
  } else {
    createCart(product);
  }
  uiService.alert('Added to cart successfully');
};

const updateCart = (cart, product) => {
  if (!cart || !cart.length) return;
  const updatedCart = [];
  let isNonExisted = true;
  for (const cartProduct of cart) {
    if (cartProduct.id === product.id) {
      isNonExisted = false;
      cartProduct.quantity = +cartProduct.quantity + +product.quantity;
    }
    updatedCart.push(cartProduct);
  }
  if (isNonExisted) {
    updatedCart.push(product);
  }
  storageService.save({ key: STORAGE_KEYS.CART, payload: JSON.stringify(updatedCart) });
};

const createCart = product => {
  storageService.save({ key: STORAGE_KEYS.CART, payload: JSON.stringify([{ ...product }]) });
};