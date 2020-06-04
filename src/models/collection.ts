export interface Collections {
    [key: string]: Collection
}

export interface Collection {
    id?: string;
    title: string;
    routeName: string,
    items: Array<Item>
}

export interface Item {
    id: number;
    name: string
    imageUrl: string;
    price: number;
}
