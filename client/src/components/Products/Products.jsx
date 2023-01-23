import "./Products.scss";
import Product from "./Product/Product";
const Products = ({ Products, innerPage, headingText }) => {
  return (
    <div className="Products-container">
      {!innerPage && <div className="sec-heading">{headingText}</div>}
      <div className="products">
        {Products.data.map((item) => (
          <Product />
        ))}
      </div>
    </div>
  );
};

export default Products;
