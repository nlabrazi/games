import React from 'react';

const Menu = () => {
  return (
    <div className="home-menu">
      <ul className="menu-list">
        <li><a href="/snake">Snake</a></li>
        <li><a href="/tetris">Tetris</a></li>
        <li><a href="/mario">Mario</a></li>
        <li><a href="/streetfighter">StreetFighter</a></li>
        <li><a href="/towerdefense">TowerDefense</a></li>
        <li><a target="_blank" href="http://nabil-labrazi.com" rel="noreferrer">Contact</a></li>
      </ul>
    </div>
  );
};

export default Menu;
