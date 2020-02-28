import React from 'react';
import '../styles/index.css';

const evento = () => {
    return (
        <React.Fragment>
            <div className="container ">
                <div className="container-fluid d-flex justify-content-center mb-4" id="espacamento">
                    <div className="flex-fill">
                        <h5 className="text-success tamanho-nome-programacao font-weight-bold">PROGRAMAÇÃO</h5>
                    </div>
                </div>
                <div className="container-fluid d-flex justify-content-center mb-5" >
                    <div className="flex-fill">
                        <h5 className="text-success  ont-weight-bold">Clique nas guias para expandir e saber mais sobre a Programação de determinado dia.</h5>
                    </div>
                </div>

                <div className="d-flex flex-column tamanho-programacao-copy ml-auto mr-auto mb-3">
                    <div id="accordion ">
                        <div className="card">
                            <div className="card-header bg-success" id="headingOne">
                                <h5 className=" d-flex justify-content-center mb-0">
                                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse-externo1"
                                        aria-expanded="false">
                                        <p className="text-white texto-data"><b>28/05/2020</b> <i className='fas fa-angle-down seta-baixo'></i>
                                        </p>
                                    </button>
                                </h5>
                            </div>
                            <div id="collapse-externo1" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                <div className="card-body text-center">
                                    <div className="container-fluid d-flex justify-content-center mb-3">
                                        <div id="accordion">
                                            <div className="card ">
                                                <div className="card-header bg-semiarido">
                                                    <a className="card-link  text-white font-weight-bold" data-toggle="collapse" href="#collapse-interno1">
                                                        OFICINA - Semiárido em Tela: Vivência Audiovisual (Parte 1)
                                        </a>
                                                </div>

                                                <div id="collapse-interno1" className="collapse" data-parent="#accordion">
                                                    <div className="card-body text-center">

                                                        <b>Horário:</b> 8:00hs às 12:00hs e das 14:00hs às 18:00hs<br />
                                                        <b>Ministrantes:</b> Felipe Lavorato e Renally Amorim (INSA)<br />
                                                        <b>Local:</b> Museu do Cangaço<br />
                                                        <a href="https://www.sympla.com.br/"
                                                            className="btn btn-success btn-lg active mt-3" role="button"
                                                            aria-pressed="true">Inscrições</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-column tamanho-programacao-copy  ml-auto mr-auto mb-3">
                    <div id="accordion ">
                        <div className="card">
                            <div className="card-header bg-success" id="headingTwo">
                                <h5 className=" d-flex justify-content-center mb-0">
                                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse-externo2"
                                        aria-expanded="false">
                                        <p className="text-white texto-data"><b>29/05/2020</b> <i className='fas fa-angle-down seta-baixo'></i>
                                        </p>
                                    </button>
                                </h5>
                            </div>
                            <div id="collapse-externo2" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                <div className="card-body text-center">
                                    <div className="container-fluid d-flex justify-content-center">
                                        <div id="accordion">
                                            <div className="card">
                                                <div className="card-header bg-success">
                                                    <a className="card-link text-white font-weight-bold" data-toggle="collapse" href="#collapse-interno2">
                                                        OFICINA - Semiárido em Tela: Vivência Audiovisual (Parte 2)
                                        </a>
                                                </div>
                                                <div id="collapse-interno2" className="collapse" data-parent="#accordion">
                                                    <div className="card-body text-center">
                                                        <b>Horário:</b> 14:00hs às 17:00hs e das 18:00hs às 21:00hs <br />
                                                        <b>Ministrantes:</b> Felipe Lavorato e Renally Amorim (INSA) <br />
                                                        <b>Local:</b> Museu do Cangaço<br />
                                                        <a href="https://www.sympla.com.br/"
                                                            className="btn btn-success btn-lg active mt-3" role="button"
                                                            aria-pressed="true">Inscrições</a>
                                                    </div>
                                                </div>
                                                <div className="card-header">
                                                    <a className="card-link text-success" data-toggle="collapse" href="#collapse-interno3">
                                                        EVENTO - Exposição de Trabalhos Científicos)</a>
                                                </div>

                                                <div id="collapse-interno3" className="collapse" data-parent="#accordion">
                                                    <div className="card-body text-center">
                                                        <b>Horário:</b> 13:00hs às 17:00hs <br />
                                                        <b>Ministrantes:</b> Alunos inscritos <br />
                                                        <b>​Local:</b> IFPE Serra Talhada<br />
                                                        <a href="https://www.sympla.com.br/"
                                                            className="btn btn-success btn-lg active mt-3" role="button"
                                                            aria-pressed="true">Inscrições</a>
                                                    </div>
                                                </div>
                                                <div className="card-header">
                                                    <a className="card-link" data-toggle="collapse" href="#collapse-interno4">
                                                        SOLENIDADE DE ABERTURA - Grupo de Xaxado Cabras de Lampião
                                        </a>
                                                </div>
                                                <div id="collapse-interno4" class="collapse" data-parent="#accordion">
                                                    <div className="card-body text-center">
                                                        <b>Horário:</b> 18:30hs <br />
                                                        <b>Ministrantes:</b> Marcelo Brito Carneiro Leão,<br /> Antônio Carlos da
                                                        Silva
                                                        Miranda
                                            e<br /> Danielli Matias de
                                            Macedo Dantas. <br />
                                                        <b>Local:</b> Câmara de Vereadores de Serra Talhada<br />
                                                        <a href="https://www.sympla.com.br/"
                                                            className="btn btn-success btn-lg active mt-3" role="button"
                                                            aria-pressed="true">Inscrições</a>
                                                    </div>
                                                </div>
                                                <div className="card-header">
                                                    <a className="card-link" data-toggle="collapse" href="#collapse-interno5">
                                                        PALESTRA - O Observatório Nacional: do Eclipse de Sobral ao Observatório de
                                                        Itacuruba - PE
                                        </a>
                                                </div>
                                                <div id="collapse-interno5" className="collapse" data-parent="#accordion">
                                                    <div class="card-body text-center">
                                                        <b>Horário:</b> 19:00hs<br />
                                                        <b>Ministrantes:</b> Daniela Lazzaro e Teresinha Rodrigues<br /> (Observatório
                                            Nacional-RJ/MCTI)<br />
                                                        <b>Local:</b> Câmara de Vereadores de Serra Talhada<br />
                                                        <a href="https://www.sympla.com.br/"
                                                            className="btn btn-success btn-lg active mt-3" role="button"
                                                            aria-pressed="true">Inscrições</a>
                                                    </div>
                                                </div>
                                                <div className="card-header">
                                                    <a className="card-link" data-toggle="collapse" href="#collapse-interno6">
                                                        Noite de observação astronômica
                                        </a>
                                                </div>
                                                <div id="collapse-interno6" className="collapse" data-parent="#accordion">
                                                    <div className="card-body text-center">
                                                        <b>Horário:</b> 20:00hs<br />
                                                        <b>Ministrantes:</b> Equipe do projeto “Desvendando o Céu Austral”<br />
                                                        <b>Local:</b> Estacionamento da Câmara de Vereadores de Serra Talhada<br />
                                                        <a href="https://www.sympla.com.br/"
                                                            className="btn btn-success btn-lg active mt-3" role="button"
                                                            aria-pressed="true">Inscrições</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-column tamanho-programacao-copy  ml-auto mr-auto mb-3">
                    <div id="accordion ">
                        <div className="card">
                            <div className="card-header bg-success" id="headingThree">
                                <h5 className=" d-flex justify-content-center mb-0">
                                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse-externo3"
                                        aria-expanded="false">
                                        <p className="text-white texto-data"><b>30/05/2020</b> <i className='fas fa-angle-down seta-baixo'></i>
                                        </p>
                                    </button>
                                </h5>
                            </div>
                            <div id="collapse-externo3" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                <div className="card-body text-center">
                                    <div className="container-fluid d-flex justify-content-center">
                                        <div id="accordion">
                                            <div className="card">
                                                <div className="card-header">
                                                    <a className="card-link" data-toggle="collapse" href="#collapse-interno7">
                                                        EXPOSIÇÃO - “Ciência Móvel” do Espaço Ciência com: sessões do planetário,
                                                        Caravana dos Notáveis Cientistas de Pernambuco.
                                        </a>
                                                </div>
                                                <div id="collapse-interno7" className="collapse" data-parent="#accordion">
                                                    <div className="card-body text-center">
                                                        <b>Horário:</b> 8:00hs às 12:00hs e 14:00hs às 18:00hs<br />
                                                        <b>Local:</b> Ginásio Poliesportivo Egídio Torres de Carvalho<br />
                                                        <b>Responsáveis:</b> Equipe do Espaço Ciência<br />
                                                        <a href="https://www.sympla.com.br/"
                                                            className="btn btn-success btn-lg active mt-3" role="button"
                                                            aria-pressed="true">Inscrições</a>
                                                    </div>
                                                </div>
                                                <div className="card-header">
                                                    <a className="card-link" data-toggle="collapse" href="#collapse-interno8">
                                                        VISITA TÉCNICA - Observação Astronômica do Sertão de Itaparica -
                                                        PE
                                                        (OASI)
                                        </a>
                                                </div>
                                                <div id="collapse-interno8" className="collapse" data-parent="#accordion">
                                                    <div className="card-body text-center">
                                                        <b>Horário:</b> 13:00hs<br />
                                                        <b>Ministrante:</b> Equipe do OASI / Observatório Nacional - RJ<br />
                                                        <b>​Local:</b> Observatório Astronômico do Sertão de Itaparica - PE<br />
                                                        <a href="https://www.sympla.com.br/"
                                                            className="btn btn-success btn-lg active mt-3" role="button"
                                                            aria-pressed="true">Inscrições</a>
                                                    </div>
                                                </div>
                                                <div className="card-header">
                                                    <a className="card-link" data-toggle="collapse" href="#collapse-interno9">
                                                        OFICINA - Semiárido em Tela: Vivência Audiovisual (Parte
                                                        3)
                                        </a>
                                                </div>
                                                <div id="collapse-interno9" className="collapse" data-parent="#accordion">
                                                    <div className="card-body text-center">
                                                        <b>Horário:</b> 8:00hs às 12:00hs e das 14:00hs às 18:00hs<br />
                                                        <b>Ministrantes:</b> Felipe Lavorato e Renally Amorim (INSA)<br />
                                                        <b>Local:</b> Museu do Cangaço<br />
                                                        <a href="https://www.sympla.com.br/"
                                                            className="btn btn-success btn-lg active mt-3" role="button"
                                                            aria-pressed="true">Inscrições</a>
                                                    </div>
                                                </div>
                                                <div className="card-header">
                                                    <a className="card-link" data-toggle="collapse" href="#collapse-interno10">
                                                        MINICURSO - Produção e estoque de forragens nativas e exóticas
                                                        da Caatinga para alimentação animal
                                                   </a>
                                                </div>
                                                <div id="collapse-interno10" className="collapse" data-parent="#accordion">
                                                    <div className="card-body text-center">
                                                        <b>Horário:</b> 8:00hs às 12:00hs<br />
                                                        <b>Ministrantes:</b> Carlos Trajano e Romildo Neves (INSA)<br />
                                                        <b>Local:</b> UAST - Sala 02, Bloco 3<br />
                                                        <a href="https://www.sympla.com.br/"
                                                            className="btn btn-success btn-lg active mt-3" role="button"
                                                            aria-pressed="true">Inscrições</a>
                                                    </div>
                                                </div>
                                                <div className="card-header">
                                                    <a className="card-link" data-toggle="collapse" href="#collapse-interno11">
                                                        MINICURSO - Cultivo de palma forrageira resistente a
                                                        cochonilha do carmim
                                                  </a>
                                                </div>
                                                <div id="collapse-interno11" className="collapse" data-parent="#accordion">
                                                    <div className="card-body text-center">
                                                        <b>Horário:</b> 8:00hs às 12:00hs<br />
                                                        <b>Ministrantes:</b> Evaldo Felix e Elder Cunha Lira (INSA)<br />
                                                        <b>Local:</b> UAST - Sala 03, Bloco 3<br />
                                                        <a href="https://www.sympla.com.br/"
                                                            className="btn btn-success btn-lg active mt-3" role="button"
                                                            aria-pressed="true">Inscrições</a>
                                                    </div>
                                                </div>
                                                <div className="card-header">
                                                    <a className="card-link" data-toggle="collapse" href="#collapse-interno12">
                                                        MINICURSO - Perspectivas e desafios do uso de água residuária
                                                        na agricultura
                                        </a>
                                                </div>
                                                <div id="collapse-interno12" className="collapse" data-parent="#accordion">
                                                    <div className="card-body text-center">
                                                        <b>Horário:</b> 8:00hs às 12:00hs<br />
                                                        <b>Ministrante:</b> Adriana Magalhães (INSA)<br />
                                                        <b>Local:</b> UAST - Sala 12, Bloco 3<br />
                                                        <a href="https://www.sympla.com.br/"
                                                            className="btn btn-success btn-lg active mt-3" role="button"
                                                            aria-pressed="true">Inscrições</a>
                                                    </div>
                                                </div>
                                                <div className="card-header">
                                                    <a className="card-link" data-toggle="collapse" href="#collapse-interno13">
                                                        MINICURSO - Cactáceas: Cultivo in vitro e conservação
                                        </a>
                                                </div>
                                                <div id="collapse-interno13" className="collapse" data-parent="#accordion">
                                                    <div className="card-body text-center">
                                                        <b>Horário:</b> 8:00hs às 12:00hs<br />
                                                        <b>Ministrantes:</b> Pollyana Karla e Micheli Leite (INSA)<br />
                                                        <b>​Local:</b> UAST - Laboratório de Microscopia II<br />
                                                        <a href="https://www.sympla.com.br/"
                                                            className="btn btn-success btn-lg active mt-3" role="button"
                                                            aria-pressed="true">Inscrições</a>
                                                    </div>
                                                </div>
                                                <div className="card-header">
                                                    <a className="card-link" data-toggle="collapse" href="#collapse-interno14">
                                                        OFICINA - Robótica - Kit LEGO BOOST
                                        </a>
                                                </div>
                                                <div id="collapse-interno14" className="collapse" data-parent="#accordion">
                                                    <div className="card-body text-center">
                                                        <b>Horário:</b> 8:00hs às 12:00hs<br />
                                                        <b>Ministrante:</b> Ellen Polliana Ramos Souza (UFRPE)<br />
                                                        <b>​Local:</b> Colégio Municipal Cônego Torres<br />
                                                        <a href="https://www.sympla.com.br/"
                                                            className="btn btn-success btn-lg active mt-3" role="button"
                                                            aria-pressed="true">Inscrições</a>
                                                    </div>
                                                </div>
                                                <div className="card-header">
                                                    <a className="card-link" data-toggle="collapse" href="#collapse-interno15">
                                                        MINICURSO - Experimentoteca de solos e Oficina de Geotintas
                                        </a>
                                                </div>
                                                <div id="collapse-interno15" className="collapse" data-parent="#accordion">
                                                    <div className="card-body text-center">
                                                        <b>Horário:</b> 8:00hs às 12:00hs<br />
                                                        <b>Ministrante:</b> Vanessa Gomes (INSA)<br />
                                                        <b>​Local:</b> Escola Municipal Manoel Pereira Neto<br />
                                                        <a href="https://www.sympla.com.br/"
                                                            className="btn btn-success btn-lg active mt-3" role="button"
                                                            aria-pressed="true">Inscrições</a>
                                                    </div>
                                                </div>
                                                <div className="card-header">
                                                    <a className="card-link" data-toggle="collapse" href="#collapse-interno16">
                                                        MINICURSO - Drones: Teoria e voo (Parte 1)
                                        </a>
                                                </div>
                                                <div id="collapse-interno16" className="collapse" data-parent="#accordion">
                                                    <div className="card-body text-center">
                                                        <b>Horário:</b> 8:00hs às 12:00hs<br />
                                                        <b>Ministrantes:</b> Cícero Fidelis, Heithor Alexandre e Felipe
                                                        Lavorato
                                            (INSA)<br />
                                                        <b>Local:</b> UAST - Sala 11, Bloco 1 (Laboratório)<br />
                                                        <a href="https://www.sympla.com.br/"
                                                            className="btn btn-success btn-lg active mt-3" role="button"
                                                            aria-pressed="true">Inscrições</a>
                                                    </div>
                                                </div>
                                                <div className="card-header">
                                                    <a className="card-link" data-toggle="collapse" href="#collapse-interno17">
                                                        PALESTRA - O Início e Evolução da Vida na Terra
                                        </a>
                                                </div>
                                                <div id="collapse-interno17" className="collapse" data-parent="#accordion">
                                                    <div className="card-body text-center">
                                                        <b>Horário:</b> 8:00hs às 12:00hs<br />
                                                        <b>Ministrante:</b> Maria das Graças Santos das Chagas (UFRPE)<br />
                                                        <b>Local:</b> Escola Erem Adauto de Carvalho<br />
                                                        <a href="https://www.sympla.com.br/"
                                                            className="btn btn-success btn-lg active mt-3" role="button"
                                                            aria-pressed="true">Inscrições</a>
                                                    </div>
                                                </div>
                                                <div className="card-header">
                                                    <a className="card-link" data-toggle="collapse" href="#collapse-interno18">
                                                        PALESTRA - Tecnologia da Informação e Comunicação na
                                                        Educação
                                        </a>
                                                </div>
                                                <div id="collapse-interno18" className="collapse" data-parent="#accordion">
                                                    <div className="card-body text-center">
                                                        <b>Horário:</b> 8:00hs às 12:00hs<br />
                                                        <b>Ministrante:</b> Maria das Graças Santos das Chagas (UFRPE)<br />
                                                        <b>Local:</b> Escola Erem Adauto de Carvalho<br />
                                                        <a href="https://www.sympla.com.br/"
                                                            className="btn btn-success btn-lg active mt-3" role="button"
                                                            aria-pressed="true">Inscrições</a>
                                                    </div>
                                                </div>
                                                <div className="card-header">
                                                    <a className="card-link" data-toggle="collapse" href="#collapse-interno19">
                                                        PALESTRA - Tecnologia da Informação e Comunicação na
                                                        Educação
                                        </a>
                                                </div>
                                                <div id="collapse-interno19" className="collapse" data-parent="#accordion">
                                                    <div className="card-body text-center">
                                                        <b>Horário:</b> 9:00hs às 10:00hs<br />
                                                        <b>Ministrante:</b> Marcelo Brito Carneiro Leão (UFRPE)<br />
                                                        <b>Local:</b> Auditório da UAST<br />
                                                        <a href="https://www.sympla.com.br/"
                                                            className="btn btn-success btn-lg active mt-3" role="button"
                                                            aria-pressed="true">Inscrições</a>
                                                    </div>
                                                </div>
                                                <div className="card-header">
                                                    <a className="card-link" data-toggle="collapse" href="#collapse-interno20">
                                                        PALESTRA - Aquicultura responsável em zonas costeiras
                                        </a>
                                                </div>
                                                <div id="collapse-interno20" className="collapse" data-parent="#accordion">
                                                    <div className="card-body text-center">
                                                        <b>Horário:</b> 9:00hs às 10:00hs<br />
                                                        <b>Ministrante:</b> Alfredo Olivera Gálvez (UFRPE)<br />
                                                        <b>​Local:</b> UAST - Sala 5, Bloco 3<br />
                                                        <a href="https://www.sympla.com.br/"
                                                            className="btn btn-success btn-lg active mt-3" role="button"
                                                            aria-pressed="true">Inscrições</a>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}

export default evento;