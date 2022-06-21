import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        payment_method_types: ["card"],
        line_items: [req.body],
        success_url: "https://www.myhealthcarecollective.com/payment-success",
        cancel_url: "https://www.myhealthcarecollective.com/health-screening",
      });
      return res.status(200).json(session);
    } catch (error) {
      res.status(500).json({ statusCode: 500, message: error.message });
    }
  } else {
    res.status(405).end("Method not allowed.");
  }
}
