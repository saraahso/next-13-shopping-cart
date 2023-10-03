'use client';

import {useTransition} from "react";

export default function AddToCart() {
    const [isPending, startTransition] = useTransition();

    const handleAddToCartButton = () => {
        startTransition(() => {
        })
    }
    return (
        <button aria-label="Add item to cart" title="Add Item to Cart" disabled={isPending}
                className='w-full border mt-4 py-2 px-8 rounded-lg hover:bg-black hover:text-white'
                onClick={() => handleAddToCartButton}><span>Add To Cart</span></button>
    )
}