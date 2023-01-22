import { createContext, useState } from "react";
import Product from "../components/Products/Product/Product";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [categories, setcategories] = useState();
  const [prpoducts, setproducts] = useState();
  return (
    <Context.Provider
      value={{
        categories,
        setcategories,
        Product,
        setproducts,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
