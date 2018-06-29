import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.li`
    height: 100%;
    display: flex:
    align-items: center;
    margin: 0;
    box-sizing: border-box;
    
  & a {
    color: white;
    text-decoration: none;
    height: 100%
    padding: 16px 10px;
    border-bottom: 4px solid transparent;
    box-sizing: border-box;
    display: block;
    
  &:hover,
  &:active,
  &.active {
        background-color: #8f5c2c;
        border-bottom: 4px solid #40a4c8;
        color: white;
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