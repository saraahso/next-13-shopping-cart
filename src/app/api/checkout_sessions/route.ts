import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";
import { CartItem } from "@/types/type";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
	apiVersion: "2023-08-16",
});

export async function POST(req: NextRequest, res: NextResponse) {
	const headersList = headers();
	const { cart, country } = await req.json()

	const lineItems = cart.map((item: CartItem) => {
		return {
			price_data: {
				currency: item.currency,
				product_data: {
					name: item.title,
				},
				unit_amount: item.price,
			},
			quantity: item.quantity,
		};
	});

	try {
		const session = await stripe.checkout.sessions.create({
			payment_method_types: ["card", "sofort"],
			line_items: lineItems,
			shipping_address_collection: {
        allowed_countries: [country],
      },
	  shipping_options: [
        {
          shipping_rate: process.env.SHIPPING_RATE,
        },
      ],
			mode: "payment",
			success_url: `${headersList.get("origin")}/thank-you`,
			cancel_url: `${headersList.get("origin")}/`,
		});
		return NextResponse.json({ sessionId: session.id });
	} catch (err) {
		return NextResponse.json({ error: "Error creating checkout session" });
	}
}
