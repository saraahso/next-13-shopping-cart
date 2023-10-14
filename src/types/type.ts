export type CartItem = {
    id: string;
    title: string;
    price: number;
    currency: string;
    quantity: number;
}

export type Product = {
    id: string;
    name: string;
    href: string;
    price: string;
    currency: string;
    imageSrc: string;
    imageAlt: string;
}