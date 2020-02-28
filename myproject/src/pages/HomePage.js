import React from 'react';
import NavBar from '../ui/NavBar';
import Carrosel from '../ui/Carrosel';
import Card from '../ui/Card';
import Conhecampina from '../ui/Conheca';
import Conheinsa from '../ui/Conheca2';
import Contato from '../ui/Contato';
import Realiza from '../ui/Realizacao';

const Home = () => {
    return(
        <React.Fragment>
            <NavBar />
            <Carrosel />
            <Card />
            <Conhecampina />
            <Conheinsa />
            <Realiza />
            <Contato />
        </React.Fragment>
    );
}

export default Home;