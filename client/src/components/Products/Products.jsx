import "./Products.scss";
import Product from "./Product/Product";
const Products = ({ innerPage, headingText }) => {
  return (
    <div className="Products-container">
      {!innerPage && <div className="sec-heading">{headingText}</div>}
      <div className="products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Products;
