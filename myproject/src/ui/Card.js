import React from 'react';
import pessoas from '../Images/02.jpg';
import '../styles/index.css'

const Card = () => {
    return (
        <div className="container-fluid">

            <div className="d-lg-flex justify-content-center" id="espaco">
                <div className="card imgCartao">
                    <img className="card-img-top img-fluid" src={pessoas} alt="Card Imagem" />
                    <div className="card-img-overlay">
                        <h1 className="card-title text-white text-center textoImagem">"Da terra ao céu, uma viagem
                            sustentável"</h1>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center">
                <div className="card  text-center tamanhoTexto">
                    <div className="card-body">
                        <p class="card-text text-justify">A Semana de Popularização da Ciência no Semiárido é uma
                                     proposta
                                     de
                                     fortalecimento e consolidação de ações na área de popularização e difusão de ciência,
                                     tecnologia
                                     e inovação na região. Uma iniciativa que mobiliza instituições públicas e da sociedade civil
                                     em
                                     torno de questões contextualizadas e de melhoria da vida das pessoas, tendo em vista, que é
                                     importante e necessário criar novos espaços de debates, análises e reflexões, de
                                     compartilhamento e de saberes, buscando o protagonismo nos processos de aprendizagem e
                                     descobrimento. No seu quinto ano de existência a SPCSA acontecerá no município de Serra
                                     Talhada
                                     entre os dias 29 e 31 de maio deste ano de 2019. Terá uma ampla participação de toda a
                                     comunidade educacional do entorno da cidade de Serra Talhada e contará com o apoio efetivo
                                     da
                                     prefeitura da cidade e instituições das mais diversas como escolas, faculdades,
                                     universidades e
                            ONGs.</p>
                        <a href="programacao.html" class="btn btn-success btn-lg active" role="button"
                            aria-pressed="true">Inscrições</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;