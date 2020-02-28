import React from 'react';
import '../styles/index.css';
import insa from '../Images/ins1.png'

const Conhecainsa = () => {
    return (
        <div className="container-fluid ">

            <div className="container conheca-camp">

                <div className="imgcohneca">
                    <img className="imgCampina" src={insa} alt="campina grande" />
                </div>

                <div className="texto-cidins">
                    <h1>Conheça o Insa</h1>
                </div>

                <div className="paragrafo-cidins">
                    <p>  O Instituto Nacional do Semiárido (Insa) é uma unidade de pesquisa integrante do Ministério da
                            Ciência, Tecnologia, Inovações e Comunicações (MCTIC), com enfoque no Semiárido brasileiro. Como uma
                            instituição federal de pesquisa, articula, realiza, promove e divulga Ciência, Tecnologia e Inovação
                            como patrimônios universais para o bem da sociedade e, particularmente, do Semiárido brasileiro. O
                            Instituto também tem inserção internacional como correspondente científico do Brasil junto à
                            Convenção das Nações Unidas para o Combate à Desertificação (UNCCD).</p>
                </div>

                <div className="botao-saiba">
                    <a className="btn btn-success btn-lg active" href="/VI-Enc-do-Semiarido/Saiba_Insa" role="button" aria-pressed="true">
                        Saiba mais
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Conhecainsa;