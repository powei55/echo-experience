// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
//   apiVersion: "2025-09-30.clover",
// });

// export async function POST(req: Request): Promise<Response> {
//   try {
//     const body = await req.json();
//     const { name, price, img } = body as {
//       name: string;
//       price: string | number;
//       img?: string;
//     };

//     if (!name || !price) {
//       return new Response(JSON.stringify({ error: "Missing data" }), {
//         status: 400,
//         headers: { "Content-Type": "application/json" },
//       });
//     }

//     // Convert price to cents
//     const amount = Math.round(
//       typeof price === "string"
//         ? parseFloat(price.replace(/[^\d.]/g, "")) * 100
//         : price * 100
//     );

//     // Detect base URL for local or production
//     const baseUrl =
//       process.env.NEXT_PUBLIC_BASE_URL ||
//       (process.env.NODE_ENV === "development"
//         ? "http://localhost:3000"
//         : "https://echo-experience.vercel.app/");

//     // Handle local or external images
//     const productImage =
//       img && img.startsWith("http") ? img : `${baseUrl}${img}`;

//     // Create checkout session
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       mode: "payment",
//       success_url: `${baseUrl}/success`,
//       cancel_url: `${baseUrl}/cancel`,
//       customer_creation: "always",
//       line_items: [
//         {
//           price_data: {
//             currency: "eur",
//             product_data: {
//               name,
//               images: productImage ? [productImage] : [],
//             },
//             unit_amount: amount,
//           },
//           quantity: 1,
//         },
//       ],
//     });

//     return new Response(JSON.stringify({ url: session.url }), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error: unknown) {
//     console.error("Stripe checkout error:", error);

//     const message =
//       error instanceof Error ? error.message : "An unknown error occurred";

//     return new Response(JSON.stringify({ error: message }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }

// with emaill and phone number code
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
//   apiVersion: "2025-09-30.clover",
// });

// export async function POST(req: Request): Promise<Response> {
//   try {
//     const body = await req.json();
//     const { name, price, img } = body as {
//       name: string;
//       price: string | number;
//       img?: string;
//     };

//     if (!name || !price) {
//       return new Response(JSON.stringify({ error: "Missing data" }), {
//         status: 400,
//         headers: { "Content-Type": "application/json" },
//       });
//     }

//     // Convert price to cents
//     const amount = Math.round(
//       typeof price === "string"
//         ? parseFloat(price.replace(/[^\d.]/g, "")) * 100
//         : price * 100
//     );

//     // Detect base URL for local or production
//     const baseUrl =
//       process.env.NEXT_PUBLIC_BASE_URL ||
//       (process.env.NODE_ENV === "development"
//         ? "http://localhost:3000"
//         : "https://echo-experience.vercel.app/");

//     // Handle local or external images
//     const productImage =
//       img && img.startsWith("http") ? img : `${baseUrl}${img}`;

//     // Create checkout session
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       mode: "payment",
//       success_url: `${baseUrl}/success`,
//       cancel_url: `${baseUrl}/cancel`,
//       customer_creation: "always",
//       customer_update: { address: "auto", name: "auto" },
//       phone_number_collection: { enabled: true }, // <-- this line adds phone number field
//       line_items: [
//         {
//           price_data: {
//             currency: "eur",
//             product_data: {
//               name,
//               images: productImage ? [productImage] : [],
//             },
//             unit_amount: amount,
//           },
//           quantity: 1,
//         },
//       ],
//     });

//     return new Response(JSON.stringify({ url: session.url }), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error: unknown) {
//     console.error("Stripe checkout error:", error);

//     const message =
//       error instanceof Error ? error.message : "An unknown error occurred";

//     return new Response(JSON.stringify({ error: message }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }

import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-09-30.clover",
});

export async function POST(req: Request): Promise<Response> {
  try {
    const body = await req.json();
    const { name, price } = body as {
      name: string;
      price: string | number;
    };

    if (!name || !price) {
      return new Response(JSON.stringify({ error: "Missing data" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Convert price to cents
    const amount = Math.round(
      typeof price === "string"
        ? parseFloat(price.replace(/[^\d.]/g, "")) * 100
        : price * 100
    );

    // Define base URL for local or production
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL ||
      (process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://echo-experience.vercel.app");

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      success_url: `${baseUrl}/success`,
      cancel_url: `${baseUrl}/cancel`,
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name,
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
    });

    return new Response(JSON.stringify({ url: session.url }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    console.error("Stripe checkout error:", error);

    const message =
      error instanceof Error ? error.message : "An unknown error occurred";

    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
