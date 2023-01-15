import { MdClose } from "react-icons/md";
import { BsCart, BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem";

import "./Cart.scss";
const Cart = ({ setShowCart }) => {
  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <div className="heading">Shopping Cart</div>
          <div className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose />
            <span className="text">close </span>
          </div>
        </div>

        {/* <div className="empty-cart">
          <BsCartX />
          <span>No products in cart.</span>
          <button className="return-cta">Return to shop</button>
        </div> */}
        <>
          <CartItem />
          <div className="cart-footer">
            <div className="subtotal">
              <span className="text">Subtotal:</span>
              <span className="text total">&#8377;1234</span>
            </div>
            <div className="button">
              <button className="checkout-cta">Checkout</button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Cart;
