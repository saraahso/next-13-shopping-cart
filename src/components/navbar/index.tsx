import React, {Suspense} from "react";
import OpenCart from "@/components/cart/open-cart";
import Cart from "@/components/cart";

export default function Navbar() {
    return (
        <nav className="relative flex items-center justify-between p-4 lg:px-6 bg-gray-100">
            <div className="flex w-full h-24 items-center text-black text-xl">
                <div className="md:w-1/2">
                    <span>Next App Cart</span>
                </div>
                <div className="flex justify-end md:w-1/2">
                    <Suspense fallback={<OpenCart/>}>
                        <Cart/>
                    </Suspense>
                </div>
            </div>
        </nav>
    )
}