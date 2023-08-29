import React from "react";
import { Link } from "react-router-dom";
import "./FooterStyle.css";

const Footer = () => {
  return (
    <footer>
      <div class="footer-content">
        <ul class="footer-links">
            <li>
                <Link to="#">About</Link>
            </li>
            <li>
                <Link to="#">Privacy Policy</Link>
            </li>
            <li>
                <Link to="#">Disclaimer</Link>
            </li>
        </ul>
        <p>
          copyright &copy; 2023 <a href="#">Hub City Advisors LLC</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
