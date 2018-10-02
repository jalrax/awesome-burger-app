import React, { Component } from 'react';
import styled from 'styled-components';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

const Wrapper = styled.div`

`;


class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1
    }
  };

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  };

  render() {
    const { ingredients } = this.state;
    return (
      <React.Fragment>
        <CheckoutSummary
          ingredients={ ingredients }
          checkoutCancelled={ this.checkoutCancelledHandler }
          checkoutContinued={ this.checkoutContinuedHandler }
        />
      </React.Fragment>
    );
  }
}

export default Checkout;