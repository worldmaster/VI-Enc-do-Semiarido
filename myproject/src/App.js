import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import Saiba_Campina from './pages/Saiba_Campina_Grande';
import Saiba_Insa from './pages/Saiba_Insa';
import Programação from './pages/Programação';


function App() {
   return (
      <BrowserRouter>
            <Route exact path='/VI-Enc-do-Semiarido/' component={Home} />
            <Route path='/VI-Enc-do-Semiarido/saiba_campina_grande' component={Saiba_Campina} />
            <Route path='/VI-Enc-do-Semiarido/saiba_insa' component={Saiba_Insa} />
            <Route path='/VI-Enc-do-Semiarido/Programacao' component={Programação} />
      </BrowserRouter>
   );
}

export default App;
