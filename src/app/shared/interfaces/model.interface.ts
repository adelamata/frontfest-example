export interface CartProduct {
    id: number;
    title: string;
    amount?: number;
    price: number;
}

export interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    category: string;
    description: string;
    rating: Object;
}
