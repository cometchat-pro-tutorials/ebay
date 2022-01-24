import withModal from '../common/Modal';
import ProductDetail from '../product/ProductDetail';

import * as storageService from '../../services/storage';
import * as STORAGE_KEYS from '../../constants/storage-keys';

const Product = ({ product, toggleModal }) => {

  const detail = () => {
    storageService.save({ key: STORAGE_KEYS.PRODUCT, payload: JSON.stringify(product) });
    toggleModal(true);
  };

  if (!product) {
    return <></>;
  }

  return (
    <div className="product" onClick={detail}>
      <img src={product.image} alt="product" />
      <p>{product.name}</p>
      <p>{product.price}$</p>
    </div>
  );
};

export default withModal(ProductDetail)(Product);