import React from 'react';
import styled, { css } from 'styled-components';

const button = (props) => {

    const Button = styled.button`
    background-color: transparent;
    border: none;
    color: red;
    outline: none;
    cursor: pointer;
    font: inherit;
    padding: 10px;
    margin: 10px;
    font-weight: bold;
    
  &:first-of-type {
    margin-left: 0;
    padding-left: 0;
  }
  
  ${props.btnType === 'success' && css`
    color: #5C9210;
  `}
  
  ${props.btnType === 'danger' && css`
    color: #944317;
  `}
`;

    return (
        <Button onClick={props.clicked}>
            {props.children}
        </Button>
    );
};

export default button;