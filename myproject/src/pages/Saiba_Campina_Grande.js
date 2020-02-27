import React from 'react';
import SaibaCampina from '../ui/SaibaCampina';
import NavBar from '../ui/NavBar';
import Contato from '../ui/Contato';

const Saiba_Campina = () => {
    return(
        <React.Fragment>
            <NavBar />
            <SaibaCampina />
            <Contato />
        </React.Fragment>
    );
}

export default Saiba_Campina;