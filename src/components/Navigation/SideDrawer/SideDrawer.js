import React from 'react';
import styled from 'styled-components';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

const Wrapper = styled.div`
    position: fixed;
    width: 280px;
    max-width: 70%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 200;
    background-color: white;
    padding: 32px 16px;
    box-sizing: border-box;
    transition: transform 0.3s ease-out;
    
  @media (min-width: 500px) {
    display: none;
  }
   
  &.open {
    transform: translateX(0);
  }
  
  &.closed {
    transform: translateX(-100%);
  }
`;

const LogoContainer = styled.div`
    height: 11%;
    margin-bottom: 32px;
`;

const sideDrawer = (props) => {
    let additionClass = 'closed';

    if (props.open) {
        additionClass = 'open';
    }

    return (
        <React.Fragment>
            <Backdrop show={props.open} clicked={props.closed} />
            <Wrapper className={additionClass}>
                <LogoContainer>
                    <Logo />
                </LogoContainer>
                <nav>
                    <NavigationItems />
                </nav>
            </Wrapper>
        </React.Fragment>
    );
};

export default sideDrawer;