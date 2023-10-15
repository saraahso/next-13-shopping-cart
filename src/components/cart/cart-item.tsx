import {formatCurrencyString, useShoppingCart} from "use-shopping-cart";
import {CartItem} from "@/types/type";
import {XMarkIcon} from "@heroicons/react/24/outline";

type Props = {
    item: CartItem
}
export default function CartItem({item}: Props) {
    const {name, quantity, price} = item;
    const {removeItem} = useShoppingCart();

    const handleRemoveItem = () => {
        removeItem(item.id);
    };

    return (
        <div className="flex items-center gap-4 py-3">
            <div>
                {name} <span className="text-xs">({quantity})</span>
            </div>
            <div className="ml-auto">
                {formatCurrencyString({value: price, currency: "USD"})}
            </div>
            <button
                onClick={() => handleRemoveItem()}
                className="hover:bg-emerald-50 transition-colors rounded-full duration-500 p-1"
            >
                <XMarkIcon className="h-4 w-4 text-red-500" aria-hidden="true"/>
            </button>
        </div>
    )
}