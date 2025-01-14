import React from "react";
import "../Footer.css"; // Create a CSS file for styling if needed

const Footer = () => {
  return (
    <footer className="footer">
      {/* <div className="footer-container">
        <div className="footer-left">
          <span className="text-3xl font-semibold pirata-one-regular">Satan Coffee</span>
          <p className="footer-contact pt-10">
            <span></span>
          </p>
        </div>

        <div className="footer-middle">
          <div>
            <h4>Company</h4>
            <ul>
              <li className="text-gray-400">Home</li>
              <li className="text-gray-400">About</li>
              <li className="text-gray-400">Menu</li>
              <li className="text-gray-400">Contact</li>
            </ul>
          </div>
        </div>

        <div className="footer-right"></div>
      </div> */}

      <div className="footer-bottom content-center">
        <p>
          Satan Coffee © 2025 | All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
