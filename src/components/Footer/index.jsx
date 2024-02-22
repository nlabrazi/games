import React from 'react';
import 'assets/css/components/footer.css';
import Frame from "assets/images/Frame.png"


function Footer() {
  return (
    <footer>
      <div className="footer-content-container">
        <div className="logo-section-container footer-logo-container">
          <div className="logo-container">
            <img src={Frame} alt="Logo" />
            <h3 className="footer-logo-text"><span className="goldish-color">G</span>amer</h3>
          </div>
        </div>
        <div className="footer-p-tag-container">
          <p className="footer-services-text">Our Story</p>
          <p className="footer-services-text">Games</p>
          <p className="footer-services-text">Web Games</p>
          <p className="footer-services-text">Careers</p>
          <p className="footer-services-text">Support</p>
          <p className="footer-services-text">My Account</p>
        </div>
        <div className="footer-icon-container">
          <a href="https://nabil-labrazi.com" target="_blank" rel="noopener noreferrer"> <i className="fa-brands fa-twitter"></i></a>
          <a href="https://nabil-labrazi.com" target="_blank" rel="noopener noreferrer"> <i className="fa-brands fa-facebook"></i></a>
          <a href="https://nabil-labrazi.com" target="_blank" rel="noopener noreferrer"> <i className="fa-brands fa-youtube"></i></a>
        </div>
        <div className="terms-condition">
          <p className="footer-text policy-text">Terms and Conditions</p>
          <p className="footer-text policy-text">Privacy Policy</p>
          <p className="footer-text policy-text">Cookie Policy</p>
          <p className="footer-text policy-text">Privacy Settings</p>
        </div>
        <div className="last-part">
          <p className="footer-text">Play Games @ Gamer @ 2000-2024 Gamer nabst3r</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
