import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51JISi2JuJcW9mgpDQp4KHYCHLSYxwr01ik3wbboDSDVxh7kg1NOMAetCinICelOkP8fc63ydLXh2oOlJGpN043Jp00Uq50cBph';
  
  const onToken = token => {
    console.log(token);
    alert('Payment Successful!!');
  };

  return (
    <StripeCheckout 
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/en/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      currency='CAD'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;