// src/pages/Home.js
import React from 'react';
import Navbar from 'components/Navbar';
import Banner from 'components/Banner';
import Footer from 'components/Footer';

const Home = () => (
  <div className="home-container">
    <Navbar />
    <Banner />
    <Footer />
  </div>
);

export default Home;
