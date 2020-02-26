//codigo abaixo e o componente na tela campiana grande
import React from 'react';
import '../styles/index.css';
import campinaGrande from '../Images/cid1.jpg';

const Conhecacampina = () => {
    return (
        <div className="container-fluid ">

            <div className="container conheca-camp">

                <div className="imgcohneca">
                    <img className="imgCampina" src={campinaGrande} alt="campina grande" />
                </div>

                <div className="texto-cidins">
                    <h1>Conheça Campina Grande</h1>
                </div>

                <div className="paragrafo-cidins">
                    <p> Campina Grande é um município brasileiro no estado da Paraíba. Considerada um dos principais
                                        polos
                                        industriais da Região Nordeste, foi fundada em 1 de dezembro de 1697, tendo sido elevada à
                                        categoria
                                        de
                                        cidade em 11 de outubro de 1864. Pertence à Região Geográfica Imediata de Campina Grande e à
                                        Região
                                        Geográfica Intermediária de Campina Grande. De acordo com estimativas do IBGE de 2018, sua
                                        população
                                        era
                                        de 407 472 habitantes, sendo a segunda cidade mais populosa da Paraíba, e sua região
                                        metropolitana,
                                        formada por dezenove municípios, possui uma população estimada em 638 017 habitantes.

                                        Campina Grande é um importante centro universitário, contando com vinte e uma universidades
                                        e
                                        faculdades, sendo três delas públicas. E também é a cidade com proporcionalmente o maior
                                        número
                                        de
                                        doutores do Brasil, 1 para cada 590 habitantes, seis vezes a média nacional. Além de ensino
                                        superior, o município é destaque também em centros de capacitação para o nível médio e
                                        técnico.
                                        Também
                                        possui o segundo maior PIB entre os municípios paraibanos, representando 15,63% do total das
                                        riquezas
                                        produzidas na Paraíba. Uma evidência do desenvolvimento da cidade nos últimos tempos é o
                                        ranking
                                        da
                                        revista Você S/A, no qual Campina Grande aparece como uma das 100 melhores cidades para se
                                        trabalhar
                                        e
                                        fazer carreira do Brasil, única cidade do interior entre as capitais escolhidas no país. O
                                        município
                                        é ainda considerado a cidade mais dinâmica do Nordeste e a 6ª mais dinâmica do Brasil
                                        segundo "A
                                        Gazeta
                                    Mercantil" e foi apontada como uma das 20 metrópoles brasileiras do futuro.</p>
                </div>

                <div className="botao-saiba">
                    <a className="btn btn-success btn-lg active" href="Saibamais.html" role="button" aria-pressed="true">
                       Saiba mais
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Conhecacampina;