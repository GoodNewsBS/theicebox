const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  const sig    = event.headers['stripe-signature'];
  const secret = process.env.STRIPE_WEBHOOK_SECRET;

  let stripeEvent;

  try {
    stripeEvent = stripe.webhooks.constructEvent(
      event.body,
      sig,
      secret
    );
  } catch (err) {
    return {
      statusCode: 400,
      body: `Webhook error: ${err.message}`,
    };
  }

  switch (stripeEvent.type) {
    case 'payment_intent.succeeded':
      console.log('Payment succeeded:', stripeEvent.data.object.id);
      // TODO: send confirmation email
      // TODO: notify kitchen
      break;

    case 'payment_intent.payment_failed':
      console.log('Payment failed:', stripeEvent.data.object.id);
      break;
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ received: true }),
  };
};