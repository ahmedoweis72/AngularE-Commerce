export interface Product {
    id?: number;
    availabilityStatus?: string;
    brand?: string;
    title?: string;
    category?: string;
    rating?:number;
    description?: string;
    price?: number;
    images?: string[];
    thumbnail?: string;
    stock?:number;
    quantity?:number
}
