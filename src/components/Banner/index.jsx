import React from 'react';
import 'assets/css/components/banner.css';

import Group18 from "assets/images/Group18.png"
import rectangle_snake from "assets/images/rectangle_snake.png"
import rectangle_tetris from "assets/images/rectangle_tetris.png"
import Rectangle5 from "assets/images/Rectangle5.png"
import Rectangle7 from "assets/images/Rectangle7.png"

const gameClick = (gamePath) => {
  // window.open(gamePath)
  window.location.href = gamePath;
};

function Banner() {

  return (
    <>
      <section className="banner-section">
        <div className="banner-content-container left-banner-bg">
          <div className="banner-left-side">
            <h3 className="banner-content-heading">Play Like The</h3>
            <h1 className="gradient-text text-goat">G.O.A.T</h1>
            <div>
              <li className="description-text"><i className="fa-regular fa-circle-play"></i> 1-Click instant play</li>
              <li className="description-text"><i className="fa-solid fa-download"></i> No Download</li>
              <li className="description-text"> <i className="fa-solid fa-users"></i> 1000s of supported online games</li>
            </div>

            <div className="btn-container">
              <a href="https://nabil-labrazi.com" target="_blank" rel="noopener noreferrer"><button className="btn-banner">Sign in</button></a>
              <a href="https://nabil-labrazi.com" target="_blank" rel="noopener noreferrer"><button className="btn-banner" id="btn-pink">Go Rogue</button></a>


            </div>
          </div>
        </div>
        <div className="banner-right-side">
          <img src={Group18} alt="Logo" />
        </div>
      </section>

      <main>
        <section className="section-max-width online-game-funny-video-section">
          <div>
            <h3 className="online-game-text">Online Games <span className="gradient-text">Funny Videos</span></h3>
            <p className="description-text">A Collection of Hilarious Videos to Brighten Your Day</p>
          </div>

          <div className="grid-box-layout">
            <div>
              <div className="grid-item" onClick={() => gameClick("/snake")}>
                <img src={rectangle_snake} alt="Logo" />
                <div className="overlay">
                  <i className="fa-regular fa-circle-play"></i>
                  <h3>Watch now</h3>
                </div>

              </div>
              <p className='grid-item-text-description'>The famous Snake Game revisted</p>
            </div>
            <div>
              <div className="grid-item" onClick={() => gameClick("/towerdefense")}>
                <img src={Rectangle5} alt="Logo" />
                <div className="overlay">
                  <i className="fa-regular fa-circle-play"></i>
                  <h3>Watch now</h3>
                </div>
              </div>
              <p className='grid-item-text-description'>A funny Tower-Defense game</p>
            </div>
            <div>
            <div className="grid-item" onClick={() => gameClick("/tetris")}>
                <img src={rectangle_tetris} alt="Logo" />
                <div className="overlay">
                  <i className="fa-regular fa-circle-play"></i>
                  <h3>Watch now</h3>
                </div>
              </div>
              <p className='grid-item-text-description'>Breaking game records on Tetris like OG !</p>
            </div>
            <div>
            <div className="grid-item" onClick={() => gameClick("/streetfighter")}>
                <img src={Rectangle7} alt="Logo" />
                <div className="overlay">
                  <i className="fa-regular fa-circle-play"></i>
                  <h3>Watch now</h3>
                </div>
              </div>
              <p className='grid-item-text-description'>Busted gaming on school laptop, but you are still lit.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Banner;
