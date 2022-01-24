import Product from './Product';

const Products = ({ products }) => {
  if (!products || !products.length) {
    return <></>;
  }
  return (
    <div className="products__container">
      {products.map(product => <Product key={product.id} product={product} />)}
    </div>
  );
};

export default Products;