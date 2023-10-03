import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import React, {Suspense} from "react";
import Navbar from "@/components/navbar";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Next App Shopping Cart',
    description: 'A simple shopping cart app built with Next.js and Tailwind CSS'
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Navbar/>
        <Suspense>
            <main>{children}</main>
        </Suspense>
        </body>
        </html>
    )
}
