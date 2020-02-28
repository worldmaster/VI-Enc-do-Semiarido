import React from 'react';
import realiza from '../Images/realização.png';
import parceiros from '../Images/parceiros.png';

const Realiza = () => {
    return(
        <div className="container-fluid ">

            <div className="d-flex justify-content-center">
               <div className="p-2 justify-content-center">
                  <h2>Realização</h2>
               </div>
            </div>

            <div className="d-flex justify-content-center">
                <img className="img-fluid" src={realiza} alt="Realização"/>
            </div><br/><br/>

            <div className="d-flex justify-content-center">
                <div className="p-2 justify-content-center">
                    <h2>Parceiros</h2>
                </div>
            </div>

            <div className="d-flex justify-content-center">
                <img className="img-fluid" src={parceiros} alt="Parceiros"/>
            </div>
        </div>
    );
}

export default Realiza;