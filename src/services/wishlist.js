import * as uiService from './ui';
import * as storageService from './storage';
import * as STORAGE_KEYS from '../constants/storage-keys';

export const remove = product => {
  let wishlist = JSON.parse(storageService.get(STORAGE_KEYS.WISHLIST));
  if (!wishlist || !wishlist.length) return;
  wishlist = wishlist.filter(wishlistProduct => wishlistProduct.id !== product.id);
  storageService.save({ key: STORAGE_KEYS.WISHLIST, payload: JSON.stringify(wishlist) });
};

export const addToWishlist = product => {
  if (!product) return;
  const wishlist = JSON.parse(storageService.get(STORAGE_KEYS.WISHLIST));
  if (wishlist && wishlist.length) {
    updateWishlist(wishlist, product);
  } else {
    createWishlist(product);
  }
  uiService.alert('Added to wishlist successfully');
};

const updateWishlist = (wishlist, product) => {
  if (!wishlist || !wishlist.length || !product) return;
  for (const wishlistProduct of wishlist) {
    if (wishlistProduct.id === product.id) {
      uiService.alert('The product was existed in the wishlist');
      return;
    }
  }
  wishlist.push(product);
  storageService.save({ key: STORAGE_KEYS.WISHLIST, payload: JSON.stringify(wishlist) });
};

const createWishlist = product => {
  storageService.save({ key: STORAGE_KEYS.WISHLIST, payload: JSON.stringify([product]) });
};