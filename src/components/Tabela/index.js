import React from 'react';
import styled from 'styled-components';

const ATabela = styled.table`
    width: 100%;
    max-width: 1200px;
    margin: 30px auto;
`;


function Tabela({ children }) {
    return (
        <ATabela>
            {children}
        </ATabela>

    )
}

export default Tabela;