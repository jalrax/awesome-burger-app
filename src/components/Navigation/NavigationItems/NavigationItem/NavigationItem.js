import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.li`
    margin: 10px 0;
    width: 100%;
    display: block;
    box-sizing: border-box;
    
  & a {
    color: #8f5c2c;
    text-decoration: none;
    width: 100%
    box-sizing: border-box;
    display: block;
    
    &:hover,
    &:active,
    &.active {
        color: #40a4c8;
    }
  }
  
  @media (min-width: 500px) {
        height: 100%;
        width: auto;
        display: flex;
        align-items: center;
        margin: 0;
        
      & a {
        color: white;
        height: 100%;
        padding: 16px 10px;
        border-bottom: 4px solid transparent;
        
        &:hover,
        &:active,
        &.active {
            background-color: #8f5c2c;
            border-bottom: 4px solid #40a4c8;
            color: white;
        }
      }
  }
`;

const navigationItem = (props) => (
    <Wrapper>
        <a href={props.link}
           className={props.active ? 'active' : null}>{props.children}
        </a>
    </Wrapper>
);
export default navigationItem;