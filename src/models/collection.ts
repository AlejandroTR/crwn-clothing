export interface Collection {
    id?: number;
    title: string;
    routeName: string,
    items: Array<Item>
}

export interface Item {
    id?: number;
    name: string
    imageUrl: string;
    price: number;
}
