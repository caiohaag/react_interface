import React from 'react';
import Menu from './components/Menu';
import Footer from './components/Footer';
import PageDefault from './components/PageDefault';

function Pagina404() {
  return (
      <PageDefault>
        <div className="div404">
          <h1>
            Erro 404 - Esta página não existe =(            
          </h1>
          <img src="https://ligados32.com/wp-content/uploads/2017/05/Alex-Smith-NFL-Raiders-Chiefs-Oakland.jpg" alt="Página não encontrada"/>
        </div>
      </PageDefault>
  );
}

export default Pagina404;
