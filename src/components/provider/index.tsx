'use client'

import React from 'react'
import {CartProvider as USCProvider} from 'use-shopping-cart'

export default function CartProvider({children}) {

    return (
        <USCProvider
            // @ts-ignore
            mode="checkout-session"
            stripe={process.env.NEXT_PUBLIC_TEST_STRIPE_PUBLISHABLE_KEY as string}
            currency={'USD'}
            successUrl={'https://example.com/success'}
            cancelUrl={'https://example.com/cancel'}
            allowedCountries={['US', 'GB', 'CA']}
            billingAddressCollection={true}
        >
            {children}
        </USCProvider>
    )
}