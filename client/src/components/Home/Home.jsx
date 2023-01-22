import { useEffect, useContext } from "react";

import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
import "./Home.scss";

const Home = () => {
  const { categories, setcategories, Product, setproducts } =
    useContext(Context);
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const getProducts = () => {
    fetchDataFromApi("api/products?populate=*").then((res) => {
      console.log(res);
      setproducts(res);
    });
  };
  const getCategories = () => {
    fetchDataFromApi("api/categories?populate=*").then((res) => {
      console.log(res);
      setcategories(res);
    });
  };

  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category categories={categories} />
          <Products products={Product} headingText="Popular Products" />
        </div>
      </div>
    </div>
  );
};

export default Home;
