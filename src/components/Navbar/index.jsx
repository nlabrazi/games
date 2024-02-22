import React from 'react';
import 'assets/css/components/navbar.css';
import Frame from "assets/images/Frame.png"

function Navbar() {
  return (
    <nav>
      <div className="logo-section-container">
        <div className="logo-container">
          <img src={Frame} alt="Logo" />
        </div>
        <div>
          <h3 className="logo-text"><span className="goldish-color">G</span>amer</h3>
        </div>
      </div>
      <div className="navbar-rightside-content-container">
        <div className="nav-a-tag-container">
          <a className="description-text about-us" href="https://nabil-labrazi.com" target="_blank" rel="noopener noreferrer">About Us</a>
          <a className="description-text developers" href="https://nabil-labrazi.com" target="_blank" rel="noopener noreferrer">Developers</a>

          <div className="follow-us-div-container">
            <p className="description-text">Follow Us On</p>
            <a className="follow-us-icons" href="https://nabil-labrazi.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-youtube" style={{ color: '#F61C0D' }}></i></a>
            <a className="follow-us-icons" href="https://nabil-labrazi.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-tiktok"></i></a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
