// General
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Styles
import 'assets/css/style.css';
import 'assets/css/mobile-responsive.css';
import 'assets/css/tablet-responsive.css';

// Pages
import TetrisGame from 'pages/TetrisGame/';
import TowerGame from 'pages/TowerGame/';
import SnakeGame from 'pages/SnakeGame/';
import StreetFighterGame from 'pages/StreetFighterGame/';
import Home from 'pages/Home';


const App = () => (
  <Router>
    <Switch>
      <Route path="/tetris" component={TetrisGame} />
      <Route path="/snake" component={SnakeGame} />
      <Route path="/towerdefense" component={TowerGame} />
      <Route path="/streetfighter" component={StreetFighterGame} />
      <Route path="/" component={Home} /> {/* Route par défaut pour la page d'accueil */}
    </Switch>
  </Router>
  );

ReactDOM.render(<App />, document.getElementById("root"));
