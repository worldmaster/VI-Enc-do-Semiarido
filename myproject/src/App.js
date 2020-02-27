import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import Saiba_Campina from './pages/Saiba_Campina_Grande';

function App() {
  return (
     <BrowserRouter>
        <Route exact path='/' component={Home}/>
        <Route path='/Saiba_Campina_Grande' component={Saiba_Campina}/>
     </BrowserRouter>
  );
}

export default App;
