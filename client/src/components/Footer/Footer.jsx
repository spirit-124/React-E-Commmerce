import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payments from "../../assets/payments.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="tittle">About</div>
          <div className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur ad deleniti ut temporibus officiis magnam iure neque
            quas deserunt. Illum corporis quam similique id.
          </div>
        </div>
        <div className="col">
          <div className="tittle">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              Parul University, limda, Vadodra, Gujarat, 391240
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: 0471 5124 8745</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: Void.dev@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="tittle">Categories</div>
          <span className="text">HeadPones</span>
          <span className="text">Smart Watches</span>
          <span className="text">Bluetoth Speakers</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home Theatre</span>
          <span className="text">Projectors</span>
        </div>
        <div className="col">
          <div className="tittle">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Pivacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">
            VoidStore 2023 created by Void.dev PREMIUM E_COMMERCE SOLUTIONS.
          </div>
          <img src={Payments} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
