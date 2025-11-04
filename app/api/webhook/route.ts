import { NextResponse } from "next/server";
import Stripe from "stripe";
import sgMail from "@sendgrid/mail";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-09-30.clover",
});

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(req: Request) {
  const payload = await req.text();
  const sig = req.headers.get("stripe-signature");

  try {
    const event = stripe.webhooks.constructEvent(
      payload,
      sig!,
      process.env.STRIPE_WEBHOOK_SECRET as string
    );

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;
      const customerEmail = session.customer_details?.email;

      if (customerEmail) {
        await sgMail.send({
          to: customerEmail,
          from: "ikechukwupowei21@gmail.com",
          subject: "Payment Successful 🎉",
          text: `Thank you for your payment of €${session.amount_total! / 100}.`,
        });
      }
    }

    return NextResponse.json({ received: true });
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("Webhook Error:", err.message);
      return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
    }
    console.error("Unknown error:", err);
    return new NextResponse("Unknown error occurred", { status: 400 });
  }
}
