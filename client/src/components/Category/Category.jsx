// import Product from "../Products/Product/Product";
import Products from "../Products/Products";
import "./Category.scss";
// import cat1 from "../../assets/category/cat-1.jpg";
const Category = () => {
  return (
    <div className="category-main-content">
      <div className="layout">
        <div className="category-tittle">Caregory Tittle</div>
        <Products innerPage={true} />
      </div>
    </div>
  );
};

export default Category;
