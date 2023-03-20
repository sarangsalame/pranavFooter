import React from "react";
import "./footer.css";
import logo from "./asset/path0.svg";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <footer>
      <div className='logo__container'>
        <img src={logo} alt='footer-logo' />
        <span>&copy; {year} - All Rights Reserved.</span>
      </div>

      <div className='other__wrapper'>
        <div className='footer__other'>
          <div className="foo__items">
            <h3>About</h3>
            <ul>
              <li>Company</li>
              <li>Contact Us</li>
              <li>Terms and Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="foo__items">
            <h3>Product</h3>
            <ul>
              <li>Catogories</li>
              <li>Pricing</li>
              <li>Testimonials</li>
            </ul>
          </div>
          <div className="foo__items">
            <h3>Discover</h3>
            <ul>
              <li>Teams</li>
              <li>Partner</li>
              <li>Career</li>
            </ul>
          </div>
          <div className='social'>
          <h3>Follow us</h3>
            <div className="social__icons-container">
              
                <FaFacebook style={{ height:"35px", width:"35px"}}/>
              
              
                <AiFillTwitterCircle style={{ height:"35px", width:"35px"}}/>
              
              
                <BsLinkedin style={{ height:"35px", width:"35px",
                  borderRadius: "50%" }} />
             
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
