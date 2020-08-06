import React from 'react';
import styled, { css } from 'styled-components';

const UmaLinha = styled.tr`
    ${({ cor }) => css`
        background-color: ${cor};
    `}
    color: var(--black);
    &:first-child {       
        font-weight: bold;
        }
    `;

const UmaColuna = styled.td`
    width: 30%;
    padding: 5px;
    `;

const DuasColuna = styled.td`
    width: 50%;
    padding: 5px;
`;

const TresColuna = styled.td`
    width: 20%;
    padding: 5px;
`;

function Linha({
    titulo, descricao, cor, param
  }) {
      return (
        <UmaLinha cor={cor}>
            <UmaColuna>{titulo}</UmaColuna>
            <DuasColuna>{descricao}</DuasColuna>
            <TresColuna>{param}</TresColuna>
        </UmaLinha>
      )
}

export default Linha;