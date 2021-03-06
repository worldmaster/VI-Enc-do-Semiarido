import React from 'react';
import '../styles/index.css';

const Contato = () => {
    return (
        <div className="container-fluid contatoBack" id="contato">
            <div className="container formContato">
                <div className="tituloContato">
                    <h1>Contate-nos</h1>
                </div>
                <form>
                    <div className="form-group">
                        <input className="form-control" type="text" placeholder="Digite o seu nome" />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="email" placeholder="Digite o seu email" />
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" rows="3" placeholder="Digite uma mensagem" />
                    </div>
                </form>
                <div className="botao">
                    <button className="btn btn-success btenviar" aria-pressed="true">Enviar</button>
                </div>
            </div>
        </div>
    );
}

export default Contato;