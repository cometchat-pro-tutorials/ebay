const SearchProductItem = ({ product, onProductClicked }) => {

  if (!product) return <></>;

  return (
    <div className="search__producti" onClick={onProductClicked(product)}>
      <div className="search__productii">
        <img src={product.image} alt="product" />
      </div>
      <div className="search__productinf">
        <p className="search__productn">{product.name}</p>
        <p>Brand New</p>
        <p className="search__productp">{product.price}$</p>
        <p>Buy it now</p>
        <p>Free International Shipping</p>
        <p>from United States</p>
        <p className="search__productw">237+ watchers</p>
        <p>Sponsors</p>
      </div>
    </div>
  );
};

export default SearchProductItem;