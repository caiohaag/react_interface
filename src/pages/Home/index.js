import React from 'react';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import dadosIniciais from '../../data/dados_iniciais.json';

function Home() {
  return (
    <div style={{ background: "#141414"}}>
      <Menu />

      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Corrida com polêmicas e domínio da Mercedes."}
      />

      <Carousel 
        ignoreFistVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel 
        ignoreFistVideo
        category={dadosIniciais.categorias[1]}
      />

      <Carousel 
        ignoreFistVideo
        category={dadosIniciais.categorias[2]}
      />

      <Carousel 
        ignoreFistVideo
        category={dadosIniciais.categorias[3]}
      />

      <Carousel 
        ignoreFistVideo
        category={dadosIniciais.categorias[4]}
      />

      <Carousel 
        ignoreFistVideo
        category={dadosIniciais.categorias[5]}
      />

      <Footer />

    </div>
  );
}

export default Home;
