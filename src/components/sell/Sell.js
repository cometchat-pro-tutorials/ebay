import { useState, useRef, useContext } from 'react';
import validator from "validator";
import { v4 as uuidv4 } from "uuid";

import { Context } from '../../context/AppContext';

import * as uiService from '../../services/ui';
import * as firebaseService from '../../services/firebase';

import * as FIREBASE_KEYS from '../../constants/firebase-keys';

const Sell = ({ toggleModal }) => {
  const [imageToProduct, setImageToProduct] = useState(null);

  const filePickerRef = useRef(null);
  const productNameRef = useRef(null);
  const productPriceRef = useRef(null);
  const productDescriptionRef = useRef(null);

  const { user } = useContext(Context);

  const addImageToProduct = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setImageToProduct(readerEvent.target.result);
    };
  };

  const sell = () => {
    try {
      const { name, price, description } = getInputs();
      if (isProductValid({ name, price, description })) {
        uiService.showLoading();
        const id = uuidv4();
        const createdBy = user.id;
        const createdProduct = { id, createdBy, name, price, description };
        firebaseService.upload({ key: FIREBASE_KEYS.PRODUCTS, id, payload: imageToProduct, entity: createdProduct, callback: onImageUploaded })
        uiService.hideLoading();
        toggleModal(false);
      }
    } catch (error) {
      uiService.alert('Cannot sell your product, please try again');
      uiService.hideLoading();
    }
  };

  const getInputs = () => {
    const name = productNameRef.current.value;
    const price = productPriceRef.current.value;
    const description = productDescriptionRef.current.value;
    return { name, price, description };
  };

  const isProductValid = ({ name, price, description }) => {
    if (!imageToProduct) {
      uiService.alert("Please upload product image");
      return false;
    }
    if (validator.isEmpty(name)) {
      uiService.alert("Please input your product name");
      return false;
    }
    if (!validator.isNumeric(price)) {
      uiService.alert("Please input your product price. Your product price must be a number");
      return false;
    }
    if (validator.isEmpty(description)) {
      uiService.alert("Please input your product description");
      return false;
    }
    return true;
  };

  const onImageUploaded = async (entity, url) => {
    entity.image = url;
    await firebaseService.insert({ key: FIREBASE_KEYS.PRODUCTS, id: entity.id, payload: entity });
  };

  return (
    <div className="sell">
      <div className="sell__content">
        <div className="sell__container">
          <div className="sell__title">Sell Product</div>
          <div className="sell__close">
            <img
              alt="close"
              onClick={() => toggleModal(false)}
              src="https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/__geKiQnSG-.png"
            />
          </div>
        </div>
        <div className="sell__subtitle"></div>
        <div className="sell__form">
          {!imageToProduct && <div className="sell__upload" onClick={() => filePickerRef.current.click()}>
            Choose Product Image
          </div>}
          {imageToProduct && <div className="sell__image">
            <img src={imageToProduct} alt="product" onClick={() => filePickerRef.current.click()} />
          </div>}
          <input type="file" hidden ref={filePickerRef} className="sell__file" onChange={addImageToProduct} />
          <input type="text" placeholder="Product Name" ref={productNameRef} />
          <input type="text" placeholder="Product Price" ref={productPriceRef} />
          <input type="text" placeholder="Product Description" ref={productDescriptionRef} />
          <button className="sell__btn" onClick={sell}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sell;