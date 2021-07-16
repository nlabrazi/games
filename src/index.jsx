// General
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Styles
import 'assets/css/style.css';

// Components
import Menu from 'components/Menu';

// Pages
import TetrisGame from 'pages/TetrisGame/';
import TowerGame from 'pages/TowerGame/';
import SnakeGame from 'pages/SnakeGame/';
//import SongButton from 'components/SongButton';


const App = () => (
  <Router>
    <Menu />
    <Switch>
      <Route path="/tetris" component={TetrisGame} />
      <Route path="/snake" component={SnakeGame} />
      <Route path="/towerdefense" component={TowerGame} />
    </Switch>
  </Router>
  );

ReactDOM.render(<App />, document.getElementById("root"));
