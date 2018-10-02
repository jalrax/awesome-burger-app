import React from 'react';
import styled from 'styled-components';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

const Wrapper = styled.div`
    text-align: center;
    width: 80%;
    margin: auto;
  
  @media (min-width: 600px) {
    width: 500px;
  }
`;

const checkoutSummary = (props) => (
    <Wrapper>
        <h1>We hope it will tastes well!</h1>
        <div style={ { width: '100%', height: '300px', margin: 'auto' } }>
            <Burger ingredients={ props.ingredients } />
        </div>
        <Button
          btnType='danger'
          clicked={ props.checkoutCancelled }
        >
            CANCEL
        </Button>
        <Button
          btnType='success'
          clicked={ props.checkoutContinued }
        >
            SUCCESS
        </Button>
    </Wrapper>
);
export default checkoutSummary;