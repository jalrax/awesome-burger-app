import React, { Component } from 'react';

import Modal from '../../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {

        state = {
            error: null
        };
        errorConfirmedHandler = () => {
            this.setState({error: null});
        };

        componentDidMount() {
            axios.interceptors.request.use(request => {
                this.setState({error: null});
                return request;
            });

            axios.interceptors.response.use(response => response, error => {
                this.setState({error: error});
            });
        }

        render() {
            return (
                <React.Fragment>
                    <Modal
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </React.Fragment>
            );
        }
    };
};
export default withErrorHandler;