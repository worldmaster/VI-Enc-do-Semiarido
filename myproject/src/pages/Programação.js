import React from 'react';
import Evento from '../ui/eventos';
import NavBar from '../ui/NavBar';
import Contato from '../ui/Contato';


const Programacao = () => {
    return(
        <React.Fragment>
           <NavBar />
           <Evento />
           <Contato />
        </React.Fragment>
    );
}

export default Programacao;