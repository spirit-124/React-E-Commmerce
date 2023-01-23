import "./Product.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp";
const Product = ({ id, data }) => {
  return (
    <div className="product-card">
      <div className="thumbnail">
        <img
          src={process.env.REACT_APP_DEV_URl + data.img.data[0].attributes}
          alt=""
        />
      </div>
      <div className="prod-details">
        <span className="name">{data.tittle}</span>
        <span className="price">&#8377; {data.price}</span>
      </div>
    </div>
  );
};

export default Product;
