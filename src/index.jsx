// General
import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import 'assets/css/style.css';

// Components
import Tetris from 'components/Tetris/';
//import SongButton from 'components/SongButton';


const App = () => (
  <>
    <Tetris />
  </>
);

ReactDOM.render(<App />, document.getElementById("root"));
