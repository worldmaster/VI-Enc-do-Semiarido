import React from 'react';
import hotelvillage from '../Images/hotel_village.jpg';
import gardenhotel from '../Images/garden_hotel.jpg';
import piramide from '../Images/piramide.jpg';
import museu from '../Images/Museu.jpg';


const SaibaCampina = () => {
    return (
        <React.Fragment>

            <div className="container">

                <div className="conatiner-fluid d-flex justify-content-center" >
                    <div className="titulosaiba">
                        <h1>Campina Grande</h1>
                    </div>
                </div>

                <div className="container-fluid d-flex justify-content-center">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item videosaibaCampina" src="https://www.youtube.com/embed/TC8e2bEpvek" title="Campina Grande" />
                    </div>
                </div>

                <div className="container-fluid d-flex justify-content-center">
                    <div className="card Cartao-infor">
                        <div className="card-body">
                            <p className="card-text">Herdeira da cultura nordestina, Campina Grande luta por manter vivo o rico patrimônio
                          representado
                          pelas manifestações culturais e populares dessa região. A quadrilha junina, o pastoril, as
                          danças
                          folclóricas, o artesanato, etc., são alguns exemplos de manifestações da cultura popular que
                          ainda
                          encontram lugar na cidade.


                          Maior São João do Mundo, evento que acontece na cidade de Campina Grande. É O maior evento do
                          estado
                          da Paraíba, onde durante um mês a festividade no Parque do Povo costuma reunir 2 milhões de
                          pessoas.
                          Foto: 2015
                          Historicamente, Campina Grande teve, e continua tendo, papel destacado como polo disseminador da
                          arte dos mais destacados artistas arraigados na cultura popular nordestina, a exemplo dos
                          "cantadores de viola", "emboladores de coco", poetas populares em geral. Especialmente na
                          música, é
                          inegável a importância desta cidade na divulgação de artistas do quilate de Luiz Gonzaga, Rosil
                          Cavalcante, Jackson do Pandeiro, Zé Calixto, dentre muitos, e até pelo surgimento de outros
                          tantos
                          como Marinês, Elba Ramalho, etc

                          Eventos como "O Maior São João do Mundo", Festival de Violeiros, "Canta Nordeste", as vaquejadas
                          que
                          se realizam na cidade, além de programações específicas das emissoras de rádio campinenses,
                          contribuem fortemente para a preservação da cultura regional. Campina Grande também é a sede do
                          maior encontro de apologia cristã do mundo, o Encontro para a Consciência Cristã, que reúne
                          milhares
                          de pessoas das mais diversas denominações cristãs durante o carnaval, para debater temas ligados
                          à
                          fé, ética e sociedade. O evento foi incluído do calendário oficial da cidade em 2007 e no
                          calendário turístico do Estado da Paraíba em 2015.
                        <br /><br /> </p>

                            <h5 className="card-title">Açude de Bodocóngo:</h5>
                            <p className="card-text">
                                O Açude de Bodocongó um açude de água salgada originalmente criado por conta da escassez de água
                                na
                                região, uma vez que o Açude Novo e o Açude Velho já não estavam suprindo as necessidades da
                                população. Além do mais, o Açude de Bodocongó fica muito distante dos Açudes Novo e Velho,
                                podendo
                        abastecer gente que morava muito longe do centro da cidade. <br /><br />
                            </p>

                            <h5 className="card-title">Açude Velho:</h5>
                            <p className="card-text">
                                O Açude Velho foi o primeiro açude que Campina Grande teve. Foi construído por causa da seca que
                                o
                                Nordeste enfrentou de 1824 a 1828. Assim, a construção do Açude Velho pelo governo provincial da
                                Paraíba foi iniciada em 1828 e concluída em 1830, sendo, por quase um século, o maior açude de
                                Campina Grande. É onde estão localizados o monumento -símbolo de Campina Grande "Os Pioneiros" e
                                as
                                estátuas de Luiz Gonzaga e Jackson do Pandeiro.
                        </p>

                            <h5 className="card-title">Parque do Povo:</h5>
                            <p className="card-text">
                                O Parque do Povo, onde é realizado O Maior São João do Mundo e o Encontro para a Consciência
                                Cristã,
                                possui uma área de 42 mil e 500 metros quadrados situada no centro de Campina Grande. É no
                                Parque do
                                Povo que se situa a "Pirâmide do Parque do Povo", que é a única área coberta do Parque, em
                                formato
                                de uma pirâmide.
                        </p>
                        </div>
                    </div>
                </div>

                <div className="conatainer-fluid">

                    <div id="Carrosel-Hospedagem" className="carousel slide" data-ride="carousel">

                        <div className="carousel-inner">

                            <div className="carousel-item active">
                                <img className="d-block w-100 imagemturismo" src={piramide} alt="primeiro slide" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Piramide do Parque do Povo</h5>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <img className="d-block w-100 imagemturismo" src={museu} alt="segundo slide" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Museu historico e geografico de Campina Grande</h5>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#Carrosel-Hospedagem" role="button" data-slide="prev">
                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#Carrosel-Hospedagem" role="button" data-slide="next">
                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>

                <div className="container-fluid">
                    <h1 className="Titulo-turismo">Hospedagem</h1>
                </div>

                <div className="container-fluid cont-turismo">
                    <div>
                        <img className="Imagem-Turismo" src={hotelvillage} alt="hotel vilage" />
                    </div>

                    <div className="inform">
                        <div className="card" id="card-espace">
                            <div className="card-body">
                                <h5 className="card-title">Hotel Village:</h5>
                                <p>
                                    <b>Endereço:</b> R. Otacílio Nepomuceno, 1285 - Catolé, Campina Grande - PB, 58410-160 <br />
                                    <b>Telefone:</b> (83) 3310-8000<br />
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="container-fluid cont-turismo">
                    <div>
                        <img className="Imagem-Turismo" src={gardenhotel} alt="hotel vilage" />
                    </div>

                    <div className="inform">
                        <div className="card" id="card-espace">
                            <div className="card-body">
                                <h5 className="card-title">Hotel Garden:</h5>
                                <p>
                                    <b>Endereço:</b> R. Eng. José Bezerra, 400 - Mirante, Campina Grande - PB, 58407-690 <br />
                                    <b>Telefone:</b> (83) 3310-4000<br />
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </React.Fragment>

    );
}

export default SaibaCampina;