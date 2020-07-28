import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  Switch,
  Route,
  BrowserRouter
} from 'react-router-dom';
import Home from './pages/Home';
import Pagina404 from './Pagina404';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>    
  </BrowserRouter>,
  document.getElementById('root')
);
