import React from 'react';
import SaibaInsa from '../ui/SaibaInsa';
import NavBar from '../ui/NavBar';
import Contato from '../ui/Contato';

const mais_insa = () => {
    return(
       <React.Fragment>
          <NavBar />
          <SaibaInsa />
          <Contato />
       </React.Fragment>
    );
}

export default mais_insa;