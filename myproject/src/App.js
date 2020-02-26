import React from 'react';
//import logo from './logo.svg';
import './App.css';
import NavBar from './ui/NavBar.js';
import Carrosel from './ui/Carrosel.js';
import Card from './ui/Card.js';
import Conhecacampina from './ui/Conheca.js';
import Conhecainsa from './ui/Conheca2.js';
import Contato from './ui/Contato.js';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Carrosel />
      <Card />
      <Conhecacampina />
      <Conhecainsa />
      <Contato />
    </React.Fragment>
  );
}

export default App;
