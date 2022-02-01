const HomeProductItem = ({ product, onProductClicked }) => {

  if (!product) return <></>;

  return (
    <div className="home__producti" onClick={onProductClicked(product)}>
      <div className="home__productii">
        <img src={product.image} alt="home" />
      </div>
      <span>{product.price}$</span>
    </div>
  );
};

export default HomeProductItem;