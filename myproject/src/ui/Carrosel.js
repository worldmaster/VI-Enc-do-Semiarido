import React from 'react';
import campina from '../Images/campina.jpg';
import campina2 from '../Images/campina02.jpg';
import '../styles/index.css';

const Carrosel = () => {
    return(
        <div className="carousel slide carousel-fade CarroselAjuste" data-ride="carousel" id="CarroselCidade">
           <div className="carousel-inner">

              <div className="carousel-item active">
                 <img  src={campina} className="d-block w-100 img-fluid" alt="campina"/>
              </div>

              <div className="carousel-item">
                 <img  src={campina2} className="d-block w-100 img-fluid" alt="campina02"/>
              </div>
           </div>

             <a className="carousel-control-prev" href="#CarroselCidade" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Anterior</span>
             </a>

             <a className="carousel-control-next" href="#CarroselCidade" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Proximo</span>
             </a>
        </div>
    );
}

export default Carrosel;