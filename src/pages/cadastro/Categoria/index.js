import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import Linha from '../../../components/Linha';
import Tabela from '../../../components/Tabela';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';
import Removedor from '../../../components/Removedor';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
    link: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://sportsflix.herokuapp.com/categorias';
    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {' '}
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        const desc = {
          text: values.descricao,
          link: values.link,
        };

        categoriasRepository.create({
          titulo: values.titulo,
          descricao: values.descricao,
          cor: values.cor,
          link_extra: desc,
        })
          .then(() => {
            console.log('Cadastrou com sucesso!');
            window.location.reload()
          });

        clearForm();
      }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Link padrão"
          type="text"
          name="link"
          value={values.link}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      <Tabela>
        <Linha
          titulo="Nome da Categoria"
          descricao="Descrição da categoria"
          cor="gray"
          param="Ação"
        />
        {categorias.length === 0 && (
        <tr>
          Carregando...
        </tr>
        )}

        {categorias.map((categoria, indice) => (
          <Linha
            titulo={categoria.titulo}
            descricao={categoria.descricao}
            cor={categoria.cor}
            param={Removedor(categoria.id)}
          />
        ))}
      </Tabela>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
