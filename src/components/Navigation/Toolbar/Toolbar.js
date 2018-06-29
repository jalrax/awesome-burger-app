import React from 'react';
import styled from 'styled-components';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const Wrapper = styled.div`
    height: 56px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #703b09;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    z-index: 90;
    
  & nav {
    height: 100%;
    
    @media (max-width: 499px) {
        display: none;
    }
  }
`;

const LogoContainer = styled.div`
    height: 80%
`;

const toolbar = (props) => (
    <Wrapper>
        <div>MENU</div>
        <LogoContainer>
            <Logo />
        </LogoContainer>
        <nav>
            <NavigationItems />
        </nav>
    </Wrapper>
);
export default toolbar;