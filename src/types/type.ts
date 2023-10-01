export type CartItem = {
    id: string;
    title: string;
    price: number;
    currency: string;
    quantity: number;
}

export type Product = {
    id: number;
    name: string;
    href: string;
    price: string;
    imageSrc: string;
    imageAlt: string;
}