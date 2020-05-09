import React, { FunctionComponent } from 'react';
import StripeCheckout from 'react-stripe-checkout';

interface StripeCheckoutButtonProps {
    price: number;
}

const StripeCheckoutButton: FunctionComponent<StripeCheckoutButtonProps> = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_RDegNeTCWC69ppmpNabnIxJm00PtpSGp8p';

    const onToken = (token: any) => {
        console.log(token)
        alert('Payment Successful')
    }

    return(
        <StripeCheckout
           label='Pay Now'
           name='CRWN Clothing Ltd.'
           billingAddress
           shippingAddress
           image='https://svgshare.com/i/CUz.svg'
           description={`Your total is ${price} €`}
           amount={priceForStripe}
           panelLabel='Pay Now'
           token={onToken}
           stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;
