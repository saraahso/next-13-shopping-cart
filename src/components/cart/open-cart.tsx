import {ShoppingCartIcon} from "@heroicons/react/24/outline";

export default function OpenCart() {
    return (
        <div
            className="relative flex h-11 w-11 items-center justify-center rounded-md border text-black transition-colors dark:border-neutral-700 dark:text-white cursor-pointer">
            <ShoppingCartIcon className="w-5 h-5 transition-all ease-in-out hover:scale-110"/>
        </div>
    )
}