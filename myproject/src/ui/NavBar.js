import React from 'react';
import logo from '../Images/logo.png';

const NavBar = () => {
    return (
        <div className="container-fluid mb-5">
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <a className="navbar-brand" href="/VI-Enc-do-Semiarido/"><img src={logo} alt="Imagemlogo" /></a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span> </button>

                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav ml-auto mr-5">
                        <li className="nav-item">
                            <a className="nav-link" href="/VI-Enc-do-Semiarido/">Pagina Inicial</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/VI-Enc-do-Semiarido/Programacao">Programações e incrições</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="index.html" id="navDropnown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Mais informações
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navDropnown">
                                <a className="dropdown-item" href="/VI-Enc-do-Semiarido/saiba_campina_grande">Conheça Campina Grande</a>
                                <a className="dropdown-item" href="/VI-Enc-do-Semiarido/saiba_insa">Conheça o INSA</a>
                                <a className="dropdown-item" href="index.html">Hospedagem</a>
                                <a className="dropdown-item" href="#contato">Contato</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    );
}

export default NavBar;