import React from 'react';
import styled from 'styled-components';

import burgerLogo from '../../assets/images/burger-logo.png';

const Wrapper = styled.div`
    background-color: white;
    padding: 8px;
    height: 100%;
    box-sizing: border-box;
    border-radius: 5px;
    
  & img {
    height: 100%;
  }
`;

const logo = (props) => (
    <Wrapper>
        <img src={burgerLogo} alt="Burger Logo" />
    </Wrapper>
);
export default logo;