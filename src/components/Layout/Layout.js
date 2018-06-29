import React, { Component } from 'react';
import styled from 'styled-components';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const Main = styled.main`
    margin-top: 72px;
`;

class Layout extends Component {
    state = {
        showSideDrawer: true
    };

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    };

    render() {
        return (
            <React.Fragment>
                <Toolbar />
                <SideDrawer
                    closed={this.sideDrawerClosedHandler}
                    open={this.state.showSideDrawer} />
                <div>Toolbar, Sidebar, Backdrop</div>
                <Main>{this.props.children}</Main>
            </React.Fragment>
        );
    }
}

export default Layout;
