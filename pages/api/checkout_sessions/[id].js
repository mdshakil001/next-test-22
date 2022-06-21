import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const id = req.query.id;
  try {
    if (!id.startsWith("cs_")) {
      throw Error("Incorrect checkout session id.");
    }
    const checkout_session = await stripe.checkout.sessions.retrieve(id);
    return res.status(200).json(checkout_session);
  } catch (error) {
    res.status(500).json({ statusCode: 500, message: error.message });
  }
}
