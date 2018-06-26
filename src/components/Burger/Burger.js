import React from 'react';
import styled from 'styled-components';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Wrapper = styled.div`
    width: 100%;
    height: 250px;
    margin: auto;
    overflow: auto;
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;
    
  @media (min-width: 1000px) and (min-height: 700px) {
    width: 700px;
    height: 600px; 
  }
  
  @media (min-width: 500px) and (min-height: 401px) {
    width: 450px;
    height: 400px; 
  }
  
  @media (min-width: 500px) and (max-height: 400px) {
    width: 350px;
    height: 300px; 
  }
`;

const burger = (props) => {
    return (
        <Wrapper>
            <BurgerIngredient type={ 'bread-top' } />
            <BurgerIngredient type={ 'cheese' } />
            <BurgerIngredient type={ 'meat' } />
            <BurgerIngredient type={ 'bread-bottom' } />
        </Wrapper>
    );
};

export default burger;