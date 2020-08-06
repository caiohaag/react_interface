import React from 'react';
import categoriasRepository from '../../repositories/categorias';
import Button from '../Button';
import { useHistory } from 'react-router-dom';

function Removedor(id) {

  const history = useHistory();
  return (    

    <form onSubmit={(event) => {
      event.preventDefault();
      categoriasRepository.remover(id)
      .then(() => {
        window.location.reload()
      })
      }}>
      <Button type="submit">
        Deletar
      </Button>    
    </form>
  );
}

export default Removedor;