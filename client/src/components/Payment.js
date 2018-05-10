import React , { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
  render(){
    return (
      <StripeCheckout
        name="Emaily Loda"
        description="Pay $5 for 5 survey emails"
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
      <a className="btn waves-effect waves-light indigo">Add Credit</a>
      </StripeCheckout>
    );
  };
};

export default connect(null, actions)(Payments);
