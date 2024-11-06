export interface CartItem extends Product {
    quantity: number;
    totalPrice: number;
}

export interface Product {
    id: number,
    name: string,
    price: number,
    category: string,
    imageUrl: string
}
