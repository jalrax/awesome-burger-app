import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
        margin-top: 1rem;
    `;

const layout = (props) => (
    <React.Fragment>
        <div>Toolbar, Sidebar, Backdrop</div>
        <Main>{ props.children }</Main>
    </React.Fragment>
);

export default layout;
