/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alert';

export const bookTour = async tourId => {
  const stripe = Stripe(
    'pk_test_51LXzhPKsCNA7YYGOMDimsOOaAuZ7wSw6ze41kcR0HCydKyWGdVolfuq6kKNft2BVQRflIIzP5BeoIeI6AV7SV4VX00jQKjVfls'
  );

  try {
    // 1) Get checkout session from API
    const session = await axios({
      url: `/api/v1/bookings/checkout-session/${tourId}`
    });

    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (error) {
    console.log(err);
    showAlert(err);
  }

  console.log(session);
  // 2) Create checkout form + charge credit card.
};
